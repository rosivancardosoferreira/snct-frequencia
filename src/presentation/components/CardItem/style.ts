import styled from "styled-components/native";

export const ContainerCardItem = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.secondaryGray};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px 10px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const CardInfoIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  opacity: 0.9;
  font-size: 15px;
  font-weight: 400;
  margin-left: 5px;
`;

export const CardTextDays = styled(CardText)`
  margin: 5px 0;
  padding-top: 3px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondaryGray};
`;
