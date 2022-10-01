import React from "react";
import { iButton } from "_types/iButton";
import { ContainerButton, ButtonTitle } from "./style";

export function Button({ title, onPress }: iButton) {
  return (
    <ContainerButton onPress={onPress}>
      <ButtonTitle>{title}</ButtonTitle>
    </ContainerButton>
  );
}
