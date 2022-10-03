import styled, { css } from "styled-components/native";
import { iPressable } from "_types/iPressable";

export const ContainerHeaderActivity = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const ButtonPressed = css`
  background-color: ${({ theme }) => theme.colors.primaryGray};
`;

export const HeaderActivityBack = styled.View<iPressable>`
  ${({ pressed }) => css`
    border-radius: 20px;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    ${pressed && ButtonPressed};
    align-items: center;
    justify-content: center;
    margin-left: -10px;
  `};
`;

export const HeaderActivityTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  flex: 1;
`;
