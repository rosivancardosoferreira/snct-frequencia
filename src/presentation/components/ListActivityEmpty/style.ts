import styled from "styled-components/native";

export const ContainerListActivityEmpty = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50%;
`;

export const ListActivityEmptyImage = styled.Image`
  width: 130px;
  height: 152px;
`;

export const ListActivityEmptyTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 25px;
  font-weight: 500;
`;

export const ListActivityEmptySubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 20px;
  font-weight: 500;
`;
