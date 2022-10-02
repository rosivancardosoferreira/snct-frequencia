import React, { Fragment } from "react";
import Moment from "moment";
import { IconCalendar, IconTimer, IconType } from "assets/icons";
import { iCardItem } from "_types/iActivity";
import {
  CardInfoIcon,
  CardText,
  CardTextDays,
  CardTitle,
  ContainerCardItem
} from "./style";

export function CardItem({ title, type, times }: iCardItem) {
  const shouldRenderDays = times.length > 1;
  return (
    <ContainerCardItem>
      <CardTitle>{title}</CardTitle>
      <CardInfoIcon>
        <IconType />
        <CardText>{type}</CardText>
      </CardInfoIcon>
      {times.map(({ id_time, date, start_time, end_time }, index) => (
        <Fragment key={id_time}>
          {shouldRenderDays && <CardTextDays>{index + 1}° dia</CardTextDays>}
          <CardInfoIcon>
            <IconCalendar />
            <CardText>{Moment(date).format("DD/MM/YYYY")}</CardText>
          </CardInfoIcon>
          <CardInfoIcon>
            <IconTimer />
            <CardText>
              {start_time} as {end_time}{" "}
            </CardText>
          </CardInfoIcon>
        </Fragment>
      ))}
    </ContainerCardItem>
  );
}
