import styled from "styled-components/native";

export const ContainerCameraRead = styled.View`
  flex: 1;
`;

export const CameraIdentifyAwait = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CameraIdentifyTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const fullCamera = {
  flex: 1
};
