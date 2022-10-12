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

  function onHandleCancel() {
    if (onActionCancel !== undefined) {
      onActionCancel();
    }
    onDismiss();
  }
  return (
    <Modal
      animationType="fade"
      visible={isOpen}
      transparent
      onRequestClose={onHandleCancel}
    >
      <ContainerModalAlert>
        <ModalAlertDismiss onPress={onHandleCancel} />
        <ModalAlertInside>
          <Pressable onPress={onHandleCancel}>
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
                <Button
                  title={textActionCancel}
                  style={sizeButton}
                  onPress={onHandleCancel}
                />
                <Button
                  variant="blue"
                  title={textAction}
                  style={sizeButton}
                  onPress={onAction}
                />
              </>
            ) : null}
          </ModalButtons>
        </ModalAlertInside>
      </ContainerModalAlert>
    </Modal>
  );
}
