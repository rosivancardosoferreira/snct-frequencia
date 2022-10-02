import styled from "styled-components/native";

export const ContainerIdentify = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};

  border: 1px solid green;
`;

export const IdentifyHeader = styled.View`
  padding: 15px;
`;

export const IdentifyHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
`;

export const IdentifyFooterTitle = styled(IdentifyHeaderTitle)`
  margin-top: 10px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primaryGray};
  font-size: 20px;
  font-weight: 500;
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

export const IdentifySearch = styled.View``;

export const IdentifyTextInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.colors.secondaryGray};
  padding: 10px 45px 10px 10px;
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
`;

export const IdentifyIconSearch = styled.View`
  position: absolute;
  margin: auto;
  bottom: 0;
  top: 0;
  right: 15px;
  justify-content: center;
`;

export const IdentifyFooter = styled.View`
  padding: 15px;
  bottom: 0;
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;
