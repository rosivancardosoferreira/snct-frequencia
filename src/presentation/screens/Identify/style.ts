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

export const PressableBackStyle = {
  width: 40
};

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
  padding: 15px 45px 15px 15px;
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const IdentifyIconSearch = styled.View`
  position: absolute;
  top: 16px;
  right: 15px;
  justify-content: center;
`;

export const IdentifySuggestion = styled.View<iUIIdentifySuggestion>`
  ${({ isOpen, theme }) => css`
    background-color: ${theme.colors.primaryWhite};
    /* padding: 0px; */
    /* height: 0px; */
    border-radius: 8px;
    z-index: 2;
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

export const IdentifyButtonQRCode = styled.Pressable`
  width: 100%;
  height: 150px;
  position: absolute;
  top: 70px;
`;

export const IdentifyQRCode = styled.View<iPressable>`
  ${({ pressed, theme }) => css`
    border: 1px solid ${theme.colors.primaryGray};
    border-radius: 10px;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    ${pressed &&
    css`
      background-color: ${theme.colors.primaryWhite};
    `};
  `};
`;

export const IdentifyQRCodeTextButton = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
`;

export const SuggestionEmpty = styled.View<{ shouldRenderEmpty: boolean }>`
  ${({ shouldRenderEmpty }) => css`
    padding-bottom: 50px;
    ${!shouldRenderEmpty &&
    css`
      display: none;
    `};
  `};
`;

export const SuggestionEmptyTitle = styled(IdentifyQRCodeTextButton)`
  margin-top: 15px;
`;

export const SuggestionEmptyButtonQRCode = styled.Pressable`
  width: 60%;
`;

export const SuggestionEmptyQRCode = styled.View<iPressable>`
  ${({ pressed, theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    border: 1px solid ${theme.colors.secondaryGray};
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 0;
    border-radius: 8px;
    ${pressed &&
    css`
      background-color: ${theme.colors.primaryGray};
    `};
  `};
`;
