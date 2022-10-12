import styled, { css } from "styled-components/native";
import { iPressable } from "_types/iPressable";

export const ContainerCameraRead = styled.View`
  flex: 1;
`;

export const CameraIdentifyAwait = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CameraIdentifyTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const CameraIdentifyInside = styled.View`
  flex: 1;
`;

export const CameraIdentifyHeader = styled.View`
  padding: 15px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const ButtonPressed = css`
  background-color: ${({ theme }) => theme.colors.primaryGray};
`;

export const PressableBackStyle = {
  width: 50
};

export const CameraIdentifyHeaderBack = styled.View<iPressable>`
  ${({ pressed, theme }) => css`
    border-radius: 25px;
    width: 50px;
    height: 50px;
    border: 1px solid transparent;
    background-color: ${theme.colors.primaryWhite};
    align-items: center;
    justify-content: center;
    ${pressed && ButtonPressed};
  `};
`;

export const CameraIdentifyFooter = styled.View`
  position: absolute;
  width: 90%;
  z-index: 1;
  bottom: 20px;
  align-self: center;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 8px;
`;

export const CameraIdentifyFooterText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  text-align: center;
`;

export const fullCamera = {
  flex: 1
};
