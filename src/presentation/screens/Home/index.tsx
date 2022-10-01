import React from "react";
import { Text } from "react-native";
import { ContainerHome } from "./style";

export function Home() {
  return (
    <ContainerHome>
      <Text
        style={{
          color: "red",
          marginTop: 50,
          borderWidth: 1,
          borderColor: "green"
        }}
      >
        PELAS ROTAS
      </Text>
    </ContainerHome>
  );
}
