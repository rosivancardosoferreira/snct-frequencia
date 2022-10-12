import React from "react";
import { Pressable } from "react-native";
import { useCameraRead } from "./useCameraRead";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
import {
  Camera,
  CameraDevice,
  useCameraDevices
} from "react-native-vision-camera";
import {
  CameraIdentifyAwait,
  CameraIdentifyHeader,
  CameraIdentifyHeaderBack,
  CameraIdentifyInside,
  CameraIdentifyTitle,
  ContainerCameraRead,
  PressableBackStyle,
  fullCamera,
  CameraIdentifyFooter,
  CameraIdentifyFooterText,
  CameraIdentifyIndicator,
  CameraIdentifyBody,
  UtilBar
} from "./style";
import { iPressable } from "_types/iPressable";
import { IconClose } from "assets/icons";

export function CameraRead() {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back as CameraDevice;
  const shouldHiddenCamera = device == null;
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true
  });
  const { goBack } = useCameraRead({ barcodes });

  return (
    <ContainerCameraRead>
      {shouldHiddenCamera ? (
        <CameraIdentifyAwait>
          <CameraIdentifyTitle>Aguardando câmera...</CameraIdentifyTitle>
        </CameraIdentifyAwait>
      ) : (
        <CameraIdentifyInside>
          <CameraIdentifyBody>
            <CameraIdentifyHeader>
              <Pressable onPress={goBack} style={PressableBackStyle}>
                {({ pressed }: iPressable) => (
                  <CameraIdentifyHeaderBack pressed={pressed}>
                    <IconClose />
                  </CameraIdentifyHeaderBack>
                )}
              </Pressable>
            </CameraIdentifyHeader>
            <CameraIdentifyIndicator>
              <UtilBar variant="top-left" />
              <UtilBar variant="top-right" />
              <UtilBar variant="bottom-left" />
              <UtilBar variant="bottom-right" />
            </CameraIdentifyIndicator>
            <CameraIdentifyFooter>
              <CameraIdentifyFooterText>
                Coloque o QRCode na aréa da câmera
              </CameraIdentifyFooterText>
            </CameraIdentifyFooter>
          </CameraIdentifyBody>
          <Camera
            style={fullCamera}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={7}
          />
        </CameraIdentifyInside>
      )}
    </ContainerCameraRead>
  );
}
