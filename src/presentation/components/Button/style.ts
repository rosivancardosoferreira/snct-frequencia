import styled, { css } from "styled-components/native";
import { iUIButton, iUIButtonInside, iUIButtonTitle } from "_types/iButton";

const buttonVariants = {
  primary: css<iUIButtonInside>`
    ${({ pressed, theme }) => css`
      background-color: ${pressed
        ? theme.colors.secondaryWhite
        : theme.colors.primaryWhite};
    `}
  `,
  blue: css<iUIButtonInside>`
    ${({ pressed, theme }) => css`
      background-color: ${pressed
        ? theme.colors.primaryBlue
        : theme.colors.darkBlue};
    `}
  `
};

const textVariants = {
  primary: css`
    color: ${({ theme }) => theme.colors.secondaryDark};
  `,
  blue: css`
    color: ${({ theme }) => theme.colors.primaryWhite};
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
    ${buttonVariants[variant]};
  `}
`;

export const ButtonTitle = styled.Text<iUIButtonTitle>`
  ${({ variant }) => css`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    ${textVariants[variant]};
  `}
`;
