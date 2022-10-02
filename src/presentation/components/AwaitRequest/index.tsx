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

export function AwaitRequest({ onPress }: iAwaitRequest) {
  const { typeColors, typeMessage, shouldRenderSpinner, isError, isOpen } =
    useAwaitRequest();
  const { title, subTitle } = typeMessage();
  const { statusColor, background } = typeColors();
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
        {isError && (
          <RequestError>
            <Button title="Tentar novamente" onPress={onPress} />
          </RequestError>
        )}
      </ContainerAwaitRequest>
    </Modal>
  );
}
