import styled from "styled-components/native";

export const ContainerButton = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 8px;
  padding: 15px;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 20px;
  font-weight: 600;
`;
