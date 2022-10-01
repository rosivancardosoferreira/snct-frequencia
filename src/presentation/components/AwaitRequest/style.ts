import styled, { css } from "styled-components/native";
import { iUIAwaitRequest } from "_types/iAwaitRequest";

export const ContainerAwaitRequest = styled.View<iUIAwaitRequest>`
  ${({ color }) => css`
    padding: 0 20px;
    flex: 1;
    background-color: ${color};
  `}
`;

export const RequestSpinner = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 70px;
  align-items: center;
`;

export const RequestBox = styled.View`
  margin-top: 200px;
`;

export const RequestTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 40px;
  font-weight: 800;
`;

export const RequestSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 25px;
  font-weight: 400;
  margin-top: 5px;
`;

export const RequestError = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  padding: 0 20px;
`;
