import styled, { css } from "styled-components/native";
import { iUIIdentifyFooter, iUIIdentifySuggestion } from "_types/iIdentify";
import { iPressable } from "_types/iPressable";

export const ContainerIdentify = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  flex: 1;
  justify-content: space-between;
`;

export const IdentifyHeader = styled.View`
  padding: 15px;
  flex: 2;
`;

export const IdentifyHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
`;

export const IdentifyHeaderDays = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 15px;
  font-weight: 400;
  margin-top: 7px;
  margin-bottom: -6px;
`;

export const IdentifyHeaderInfos = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 16px;
  font-weight: 400;
  margin-top: 7px;
`;

export const IdentifySearch = styled.View`
  flex: 1;
`;

export const IdentifyTextInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.colors.secondaryGray};
  padding: 10px 45px 10px 15px;
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
`;

export const IdentifyIconSearch = styled.View`
  position: absolute;
  top: 12px;
  right: 15px;
  justify-content: center;
`;

export const IdentifySuggestion = styled.View<iUIIdentifySuggestion>`
  ${({ isOpen, theme }) => css`
    background-color: ${theme.colors.primaryWhite};
    padding: 0px;
    height: 0px;
    border-radius: 8px;
    ${isOpen &&
    css`
      flex: 1;
      padding: 10px;
      height: 100%;
    `}
  `};
`;

const IdentifyItemSuggestionPressed = css`
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

export const IdentifyItemSuggestion = styled.View<iPressable>`
  ${({ pressed, theme }) => css`
    padding: 15px;
    border-bottom-width: 1px;
    border-color: ${theme.colors.primaryGray};
    ${pressed && IdentifyItemSuggestionPressed};
  `};
`;

export const IdentifyNameSuggestion = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 16px;
  font-weight: 400;
  margin-top: 7px;
`;

export const IdentifyIdSuggestion = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 16px;
  font-weight: 400;
`;

export const IdentifyFooter = styled.View<iUIIdentifyFooter>`
  ${({ isOpenIdentifySuggestion, theme }) => css`
    background-color: ${theme.colors.primaryWhite};
    padding: 15px;
    ${isOpenIdentifySuggestion &&
    css`
      display: none;
    `}
  `};
`;

export const IdentifyFooterTitle = styled(IdentifyHeaderTitle)`
  margin-top: 10px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primaryGray};
  font-size: 20px;
  font-weight: 500;
`;
