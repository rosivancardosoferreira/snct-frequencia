import styled, { css } from "styled-components/native";
import { iPressable } from "_types/iPressable";

export const ContainerHome = styled.View`
  flex: 1;
`;

export const HomeBoxHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 30px 20px;
`;

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 25px;
  font-weight: 500;
`;

export const HomeSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 17px;
  font-weight: 500;
  margin-top: 5px;
  opacity: 0.7;
`;

export const HomeBoxBody = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  padding: 40px 20px 0 20px;
  flex: 1;
`;

const HomeBoxEffectPress = css`
  background-color: #c0f1fd;
`;

export const HomeBox = styled.View<iPressable>`
  ${({ pressed, theme }) => css`
    border: 1px solid ${theme.colors.primaryGray};
    border-radius: 8px;
    padding: 20px 10px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #e9f0fe;
    ${pressed && HomeBoxEffectPress};
  `};
`;

export const HomeBoxToday = styled(HomeBox)<iPressable>`
  ${({ pressed }) => css`
    margin-top: 15px;
    background-color: #ecebf2;
    ${pressed && HomeBoxEffectPress};
  `};
`;

export const HomeCardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 25px;
  font-weight: 600;
  margin-top: 5px;
  opacity: 0.7;
  text-align: left;
  width: 40%;
`;

export const HomeBoxImage = styled.Image`
  width: 55%;
  height: 142px;
`;
