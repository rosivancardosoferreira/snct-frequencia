import React from "react";
import { Pressable } from "react-native";
import { iButton } from "_types/iButton";
import { iPressable } from "_types/iPressable";
import { ContainerButton, ButtonTitle, ButtonInside } from "./style";

export function Button({
  onPress,
  title,
  style,
  variant = "primary",
  top = 0,
  bottom = 0
}: iButton) {
  return (
    <ContainerButton style={style} top={top} bottom={bottom}>
      <Pressable onPress={onPress}>
        {({ pressed }: iPressable) => (
          <ButtonInside pressed={pressed} variant={variant}>
            <ButtonTitle variant={variant}>{title}</ButtonTitle>
          </ButtonInside>
        )}
      </Pressable>
    </ContainerButton>
  );
}
