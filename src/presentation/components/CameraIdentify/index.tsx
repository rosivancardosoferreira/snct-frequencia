import React from "react";
import {
  Camera,
  CameraDevice,
  useCameraDevices
} from "react-native-vision-camera";
import { iCameraIdentify } from "_types/iCameraIdentify";
import { ContainerCameraIdentify, fullCamera } from "./style";

export function CameraIdentify({ isOpen }: iCameraIdentify) {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back as CameraDevice;
  const shouldOpenCamera = device !== null && isOpen;
  return shouldOpenCamera ? (
    <ContainerCameraIdentify>
      <Camera style={fullCamera} device={device} isActive={true} />
    </ContainerCameraIdentify>
  ) : null;
}
