import { useCallback, useEffect } from "react";
import { Linking } from "react-native";
import { Camera } from "react-native-vision-camera";
import { useSelector } from "react-redux";
import { selectAllActivitys } from "store/slices/allActivitys";

export function useListAllActivity() {
  const dataAllactivitys = useSelector(selectAllActivitys);

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === "denied") await Linking.openSettings();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, [requestCameraPermission]);

  return {
    dataAllactivitys
  };
}
