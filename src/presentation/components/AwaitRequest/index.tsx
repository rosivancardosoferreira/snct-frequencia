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

export function AwaitRequest({ type, onPress }: iAwaitRequest) {
  const { typeColors, typeMessage } = useAwaitRequest();
  const { title, subTitle } = typeMessage({ type });
  const { statusColor, background } = typeColors({ type });
  const shouldRenderSpinner = type === "await";
  const isError = type === "error";
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <StatusBar barStyle="light-content" backgroundColor={statusColor} />
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
