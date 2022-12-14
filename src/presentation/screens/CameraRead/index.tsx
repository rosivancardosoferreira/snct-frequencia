import React from "react";
import { Pressable } from "react-native";
import { useCameraRead } from "./useCameraRead";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
import { iPressable } from "_types/iPressable";
import { IconClose } from "assets/icons";
import { AwaitRequest, ModalAlert } from "presentation/components";
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

export function CameraRead() {
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true
  });
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back as CameraDevice;
  const {
    isReadingQRCode,
    buttonAwaitRequest,
    goBack,
    onCancelModal,
    onActionPressAwait,
    onCheckinParticipants
  } = useCameraRead({
    barcodes
  });
  const shouldHiddenCamera = device == null || !isReadingQRCode;

  return (
    <ContainerCameraRead>
      <AwaitRequest
        titleFirstButton={buttonAwaitRequest}
        onPress={onActionPressAwait}
      />
      <ModalAlert
        clickOnDismiss={false}
        onAction={onCheckinParticipants}
        onActionCancel={onCancelModal}
      />
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
            frameProcessorFps={2}
          />
        </CameraIdentifyInside>
      )}
    </ContainerCameraRead>
  );
}
