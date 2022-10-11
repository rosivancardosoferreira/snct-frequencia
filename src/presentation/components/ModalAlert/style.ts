import styled, { css } from "styled-components/native";
import { iPressable } from "_types/iPressable";

export const ModalStyle = styled.Modal``;

export const ContainerModalAlert = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalAlertDismiss = styled.Pressable`
  width: 100%;
  flex: 2;
  height: 100%;
`;

export const ModalAlertInside = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  position: absolute;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
`;

export const ModalAlertClose = styled.View<iPressable>`
  ${({ pressed, theme }) => css`
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    position: absolute;
    right: 0;
    top: -10px;
    background-color: ${pressed ? theme.colors.primaryGray : "transparent"};
  `}
`;

export const ModalAlertTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 10px;
  max-width: 80%;
`;

export const ModalAlertMessage = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;

export const sizeButton = {
  width: "48%"
};
