import styled, { css } from "styled-components/native";
import { UIUtilBar } from "_types/iCameraRead";
import { iPressable } from "_types/iPressable";

export const UtilBarVariante = {
  "top-left": css`
    border-top-width: 5px;
    border-left-width: 5px;
    top: 0;
    left: 0;
  `,
  "top-right": css`
    border-top-width: 5px;
    border-right-width: 5px;
    top: 0;
    right: 0;
  `,
  "bottom-left": css`
    border-bottom-width: 5px;
    border-left-width: 5px;
    bottom: 0;
    left: 0;
  `,
  "bottom-right": css`
    border-bottom-width: 5px;
    border-right-width: 5px;
    bottom: 0;
    right: 0;
  `
};

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

export const CameraIdentifyBody = styled.View`
  position: absolute;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  z-index: 1;
  flex: 1;
  top: 0;
`;

export const CameraIdentifyHeader = styled.View`
  padding: 15px;
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

export const CameraIdentifyIndicator = styled.View`
  width: 90%;
  max-width: 350px;
  height: 300px;
  align-self: center;
  position: relative;
`;

export const UtilBar = styled.View<UIUtilBar>`
  ${({ variant, theme }) => css`
    position: absolute;
    border-color: ${theme.colors.primaryWhite};
    ${UtilBarVariante[variant]};
    width: 100px;
    height: 100px;
  `};
`;

export const CameraIdentifyFooter = styled.View`
  margin-bottom: 20px;
  width: 90%;
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
