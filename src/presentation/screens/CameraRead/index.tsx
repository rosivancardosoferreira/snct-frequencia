import React, { useEffect } from "react";
import { useCameraRead } from "./useCameraRead";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
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
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true
  });
  const { tem } = useCameraRead({ barcodes });

  return (
    <ContainerCameraRead>
      {shouldHiddenCamera ? (
        <CameraIdentifyAwait>
          <CameraIdentifyTitle>Aguardando câmera...</CameraIdentifyTitle>
        </CameraIdentifyAwait>
      ) : (
        <Camera
          style={fullCamera}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={7}
        />
      )}
    </ContainerCameraRead>
  );
}
