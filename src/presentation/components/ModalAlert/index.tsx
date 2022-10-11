import { IconClose } from "assets/icons";
import React from "react";
import { Modal, Pressable } from "react-native";
import { iModalAlert } from "_types/iModalAlert";
import { iPressable } from "_types/iPressable";
import { Button } from "../Button";
import {
  ContainerModalAlert,
  ModalAlertClose,
  ModalAlertDismiss,
  ModalAlertInside,
  ModalAlertMessage,
  ModalAlertTitle,
  ModalButtons,
  sizeButton
} from "./style";
import { useModalAlert } from "./useModalAlert";

export function ModalAlert({ onAction, onActionCancel }: iModalAlert) {
  const { onDismiss, isOpen, title, message, textAction, textActionCancel } =
    useModalAlert();
  const shouldRenderTwoButtons =
    typeof onAction !== undefined && typeof onActionCancel !== undefined;
  return (
    <Modal
      animationType="fade"
      visible={isOpen}
      transparent
      onRequestClose={onDismiss}
    >
      <ContainerModalAlert>
        <ModalAlertDismiss onPress={onDismiss} />
        <ModalAlertInside>
          <Pressable onPress={onDismiss}>
            {({ pressed }: iPressable) => (
              <ModalAlertClose pressed={pressed}>
                <IconClose />
              </ModalAlertClose>
            )}
          </Pressable>
          <ModalAlertTitle>{title}</ModalAlertTitle>
          <ModalAlertMessage>{message}</ModalAlertMessage>
          <ModalButtons>
            {shouldRenderTwoButtons ? (
              <>
                <Button title={textActionCancel} style={sizeButton} />
                <Button variant="blue" title={textAction} style={sizeButton} />
              </>
            ) : null}
          </ModalButtons>
        </ModalAlertInside>
      </ContainerModalAlert>
    </Modal>
  );
}
