import { CardItem, HeaderActivity } from "presentation/components";
import React from "react";
import { ContainerListAllActivity } from "./style";

export function ListAllActivity() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ContainerListAllActivity>
      <HeaderActivity title="Todas atividades" />
      {data.map(() => (
        <CardItem />
      ))}
    </ContainerListAllActivity>
  );
}
