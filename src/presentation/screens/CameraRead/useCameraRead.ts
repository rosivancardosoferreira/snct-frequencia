import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Linking } from "react-native";
import { Camera } from "react-native-vision-camera";
import { useDispatch, useSelector } from "react-redux";
import { serviceCheckinParticipants } from "services/checkin";
import {
  changeAwaitRequest,
  resetAwaitRequest,
  selectAwaitRequest
} from "store/slices/awaitRequest";
import { changeModalAlert, resetModalAlert } from "store/slices/modalAlert";
import { selectAllParticipants } from "store/slices/participants";
import { iUseCameraRead } from "_types/iCameraRead";
import { IRootRouteProps, IRouterProps } from "_types/iNavigate";

export function useCameraRead({ barcodes }: iUseCameraRead) {
  const route = useRoute<IRootRouteProps<"CameraRead">>();
  const id_session = route?.params?.id_session;
  const navigation = useNavigation<IRouterProps>();
  const dataAllParticipants = useSelector(selectAllParticipants);
  const [isReadingQRCode, setIsReadingQRCode] = useState(true);
  const [idAttendees, setIdAttendees] = useState(0);
  const { type } = useSelector(selectAwaitRequest);
  const dispatch = useDispatch();

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === "denied") await Linking.openSettings();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, [requestCameraPermission]);

  const onSearchParticipant = useCallback(
    (value: string) => {
      setIsReadingQRCode(false);
      const regex = new RegExp(value, "g");
      const participant = dataAllParticipants.filter(e =>
        e.checkin_code.toString().match(regex)
      );
      if (participant.length > 0) {
        setIdAttendees(participant[0]?.id_attendees);
        dispatch(
          changeModalAlert({
            isOpen: true,
            title: `Olá, ${participant[0]?.name}`,
            message: "Confirma que é você mesmo?",
            textAction: "SIM",
            textActionCancel: "NÃO"
          })
        );
      } else {
        dispatch(
          changeAwaitRequest({
            type: "error",
            isOpen: true,
            message: "Participante não identificado"
          })
        );
      }
    },
    [dataAllParticipants, dispatch]
  );

  useEffect(() => {
    const listeningBarCodes = async () => {
      barcodes.forEach(async (scan: any) => {
        if (scan?.rawValue !== "") {
          onSearchParticipant(scan?.rawValue);
        }
      });
    };
    listeningBarCodes();
  }, [barcodes, onSearchParticipant]);

  function goBack() {
    navigation.goBack();
  }

  function onCancelModal() {
    setIsReadingQRCode(true);
    dispatch(resetModalAlert());
  }

  function onActionPressAwait() {
    setIsReadingQRCode(true);
    dispatch(resetAwaitRequest());
  }

  async function onCheckinParticipants() {
    dispatch(resetModalAlert());
    dispatch(
      changeAwaitRequest({
        type: "await",
        isOpen: true,
        title: "Enviando dados",
        message: "Aguarde um instante"
      })
    );
    try {
      await serviceCheckinParticipants({
        id_session,
        id_attendees: idAttendees
      });
      dispatch(
        changeAwaitRequest({
          type: "success",
          isOpen: true,
          title: "Sucesso!",
          message: "Registrado com sucesso."
        })
      );
    } catch (e: any) {
      dispatch(
        changeAwaitRequest({
          type: "error",
          isOpen: true,
          message: "Falha na comunicação."
        })
      );
    }
  }

  return {
    isReadingQRCode,
    buttonAwaitRequest:
      type === "error" ? "Tentar novamente" : "Credenciar outro",
    goBack,
    onCancelModal,
    onActionPressAwait,
    onCheckinParticipants
  };
}
