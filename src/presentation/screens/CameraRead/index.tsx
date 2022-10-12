import React from "react";
import { useCameraRead } from "./useCameraRead";
import {
  Camera,
  CameraDevice,
  useCameraDevices
} from "react-native-vision-camera";
import {
  CameraIdentifyAwait,
  CameraIdentifyTitle,
  ContainerCameraRead,
  fullCamera
} from "./style";

export function CameraRead() {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back as CameraDevice;
  const shouldHiddenCamera = device == null;
  const { tem } = useCameraRead();
  return (
    <ContainerCameraRead>
      {shouldHiddenCamera ? (
        <CameraIdentifyAwait>
          <CameraIdentifyTitle>Aguardando câmera...</CameraIdentifyTitle>
        </CameraIdentifyAwait>
      ) : (
        <Camera style={fullCamera} device={device} isActive={true} />
      )}
    </ContainerCameraRead>
  );
}
