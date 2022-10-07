import styled, { css } from "styled-components/native";
import { iUIButton, iUIButtonInside } from "_types/iButton";

const variants = {
  primary: css<iUIButtonInside>`
    ${({ pressed, theme }) => css`
      background-color: ${pressed
        ? theme.colors.primaryGray
        : theme.colors.primaryWhite};
    `}
  `,
  other: css<iUIButtonInside>`
    ${({ pressed, theme }) => css`
      background-color: ${pressed
        ? theme.colors.primaryGray
        : theme.colors.primaryWhite};
    `}
  `
};

export const ContainerButton = styled.View<iUIButton>`
  ${({ top, bottom }) => css`
    margin-top: ${`${top}px`};
    margin-bottom: ${`${bottom}px`};
  `}
`;

export const ButtonInside = styled.View<iUIButtonInside>`
  ${({ variant }) => css`
    border-radius: 8px;
    padding: 15px;
    ${variants[variant]};
  `}
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 20px;
  font-weight: 600;
`;
