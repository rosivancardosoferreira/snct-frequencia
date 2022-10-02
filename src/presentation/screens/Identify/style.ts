import styled from "styled-components/native";

export const ContainerIdentify = styled.View`
  flex: 1;
`;

export const IdentifyHeader = styled.View`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const IdentifyHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 20px;
  font-weight: 500;
  border-bottom-width: 1px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-color: ${({ theme }) => theme.colors.primaryGray};
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

export const IdentifyBody = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  padding: 15px;
  flex: 1;
`;
