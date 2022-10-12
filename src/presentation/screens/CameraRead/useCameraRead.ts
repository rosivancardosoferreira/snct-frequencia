import { useCallback, useEffect } from "react";
import { Linking } from "react-native";
import { Camera } from "react-native-vision-camera";

export function useCameraRead() {
  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === "denied") await Linking.openSettings();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, [requestCameraPermission]);
  return { tem: true };
}
