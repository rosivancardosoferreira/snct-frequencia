import styled, { css } from "styled-components/native";

export const ContainerHeaderActivity = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const ButtonPressed = css`
  background-color: ${({ theme }) => theme.colors.primaryGray}; ;
`;

export const HeaderActivityBack = styled.View<{ pressed: boolean }>`
  ${({ pressed }) => css`
    border-radius: 3px;
    padding: 2px 10px;
    ${pressed && ButtonPressed}
  `};
`;

export const HeaderActivityTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;
