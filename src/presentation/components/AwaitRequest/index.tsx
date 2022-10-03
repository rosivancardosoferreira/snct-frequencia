import React from "react";
import { ActivityIndicator, Modal, StatusBar } from "react-native";
import { iAwaitRequest } from "_types/iAwaitRequest";
import { Button } from "../Button";
import {
  ContainerAwaitRequest,
  RequestBox,
  RequestError,
  RequestSpinner,
  RequestSubTitle,
  RequestTitle
} from "./style";
import { useAwaitRequest } from "./useAwaitRequest";

export function AwaitRequest({ onPress, titleFirstButton }: iAwaitRequest) {
  const { typeColors, typeMessage, shouldRenderSpinner, isOpen } =
    useAwaitRequest();
  const renderButtonAction = onPress;
  const { title, subTitle } = typeMessage();
  const { statusColor, background } = typeColors();
  const titlePrimaryButton = titleFirstButton ?? "Tentar novamente";
  return (
    <Modal animationType="fade" transparent={true} visible={isOpen}>
      {isOpen && (
        <StatusBar barStyle="light-content" backgroundColor={statusColor} />
      )}
      <ContainerAwaitRequest color={background}>
        {shouldRenderSpinner && (
          <RequestSpinner>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </RequestSpinner>
        )}
        <RequestBox>
          <RequestTitle>{title}</RequestTitle>
          <RequestSubTitle>{subTitle}</RequestSubTitle>
        </RequestBox>
        {renderButtonAction && (
          <RequestError>
            <Button title={titlePrimaryButton} onPress={onPress} />
          </RequestError>
        )}
      </ContainerAwaitRequest>
    </Modal>
  );
}
