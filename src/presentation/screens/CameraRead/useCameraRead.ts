import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { Linking } from "react-native";
import { Camera } from "react-native-vision-camera";
import { iUseCameraRead } from "_types/iCameraRead";
import { IRouterProps } from "_types/iNavigate";

export function useCameraRead({ barcodes }: iUseCameraRead) {
  const navigation = useNavigation<IRouterProps>();
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
        if (scan?.rowValue !== "") {
          console.log(scan?.rowValue ?? "ou alguam coisa");
        }
      });
    };
    listeningBarCodes();
    console.log("mudou");
  }, [barcodes]);

  function goBack() {
    navigation.goBack();
  }

  return { goBack };
}
