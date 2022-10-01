import { AwaitRequest } from "presentation/components";
import React from "react";
import { ContainerHome } from "./style";

export function Home() {
  return (
    <ContainerHome>
      <AwaitRequest type="error" />
    </ContainerHome>
  );
}
