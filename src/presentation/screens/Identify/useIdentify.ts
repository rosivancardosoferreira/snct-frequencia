import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceCheckinParticipants } from "services/checkin";
import { IRootRouteProps, IRouterProps } from "_types/iNavigate";
import {
  changeAwaitRequest,
  resetAwaitRequest
} from "store/slices/awaitRequest";
import { iParticipants } from "_types/iParticipants";
import { iOnConfirmIdentify } from "_types/iIdentify";
import { Keyboard } from "react-native";
import { changeModalAlert, resetModalAlert } from "store/slices/modalAlert";
import { selectAllParticipants } from "store/slices/participants";

export function useIdentify() {
  const route = useRoute<IRootRouteProps<"Identify">>();
  const navigation = useNavigation<IRouterProps>();
  const [checkinCode, setCheckinCode] = useState("");
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [idAttendees, setIdAttendees] = useState(0);
  const dataAllParticipants = useSelector(selectAllParticipants);
  const [suggestionParticipants, setSuggestionParticipants] = useState<
    iParticipants[]
  >([]);

  const dispatch = useDispatch();
  const id_session = route?.params?.id_session;
  const titleActivity = route?.params?.title;
  const timesActivity = route?.params?.times;

  function onActionSucess() {
    setCheckinCode("");
    setSuggestionParticipants([]);
    dispatch(resetAwaitRequest());
  }

  function goBack() {
    navigation.goBack();
  }

  function onSearchParticipants(value: string) {
    const regex = new RegExp(value, "g");
    const participants = dataAllParticipants.filter(e =>
      e.checkin_code.toString().match(regex)
    );
    setSuggestionParticipants(participants as iParticipants[]);
  }

  function onChangeInput(value: string) {
    setCheckinCode(value);
    if (value.length > 0) {
      onSearchParticipants(value);
    } else {
      if (suggestionParticipants.length > 0) {
        setSuggestionParticipants([]);
      }
    }
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

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsOpenKeyboard(true);
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIsOpenKeyboard(false);
    });
    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  function onConfirmIdentify({ id_attendees, name }: iOnConfirmIdentify) {
    setIdAttendees(id_attendees);
    dispatch(
      changeModalAlert({
        isOpen: true,
        title: `Olá, ${name}`,
        message: "Confirma que é você mesmo?",
        textAction: "SIM",
        textActionCancel: "NÃO"
      })
    );
  }

  return {
    goBack,
    onCheckinParticipants,
    onSearchParticipants,
    onChangeInput,
    onActionSucess,
    onOpenCamera: () => navigation.navigate("CameraRead", { id_session }),
    onConfirmIdentify,
    checkinCode,
    titleActivity,
    timesActivity: timesActivity ?? [],
    shouldRenderDays: timesActivity.length > 1,
    suggestionParticipants,
    isOpenSuggestion: suggestionParticipants.length > 0,
    shoulHiddeFooter: suggestionParticipants.length > 0 || isOpenKeyboard,
    shouldRenderEmpty: checkinCode.length > 1
  };
}
