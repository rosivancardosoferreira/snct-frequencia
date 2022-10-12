import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Linking } from "react-native";
import { Camera } from "react-native-vision-camera";
import { useDispatch } from "react-redux";
import { changeModalAlert, resetModalAlert } from "store/slices/modalAlert";
import { iUseCameraRead } from "_types/iCameraRead";
import { IRouterProps } from "_types/iNavigate";

export function useCameraRead({ barcodes }: iUseCameraRead) {
  const navigation = useNavigation<IRouterProps>();
  const [isReadingQRCode, setIsReadingQRCode] = useState(true);
  const dispatch = useDispatch();

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === "denied") await Linking.openSettings();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, [requestCameraPermission]);

  useEffect(() => {
    const listeningBarCodes = async () => {
      barcodes.forEach(async (scan: any) => {
        if (scan?.rawValue !== "") {
          setIsReadingQRCode(false);
          dispatch(
            changeModalAlert({
              isOpen: true,
              title: "Olá, pessoa",
              message: "Confirma que é você mesmo?",
              textAction: "SIM",
              textActionCancel: "NÃO"
            })
          );
          // console.log(scan?.rawValue);
          // setIsReadingQRCode(false);
        }
      });
    };
    listeningBarCodes();
    console.log("mudou");
  }, [barcodes, dispatch]);

  function goBack() {
    navigation.goBack();
  }

  function onCancelModal() {
    setIsReadingQRCode(true);
    dispatch(resetModalAlert());
  }

  return { isReadingQRCode, goBack, onCancelModal };
}
