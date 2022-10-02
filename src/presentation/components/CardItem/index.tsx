import React from "react";
import { IconCalendar, IconTimer, IconType } from "assets/icons";
import { iCardItem } from "_types/iActivity";
import { CardInfoIcon, CardText, CardTitle, ContainerCardItem } from "./style";

export function CardItem({ title }: iCardItem) {
  return (
    <ContainerCardItem>
      <CardTitle>{title}</CardTitle>
      <CardInfoIcon>
        <IconType />
        <CardText>Minicurso</CardText>
      </CardInfoIcon>
      <CardInfoIcon>
        <IconCalendar />
        <CardText>20 de janeiro de 2022</CardText>
      </CardInfoIcon>
      <CardInfoIcon>
        <IconTimer />
        <CardText>20:00</CardText>
      </CardInfoIcon>
    </ContainerCardItem>
  );
}
