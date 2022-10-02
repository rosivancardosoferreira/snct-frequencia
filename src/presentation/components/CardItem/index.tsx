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
import { Pressable } from "react-native";
import { iPressable } from "_types/iPressable";
import { useNavigation } from "@react-navigation/native";
import { IRouterProps } from "_types/iNavigate";

export function CardItem({ title, type, times, id_session }: iCardItem) {
  const shouldRenderDays = times.length > 1;
  const navigation = useNavigation<IRouterProps>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Identify", {
          id_session,
          title,
          times
        })
      }
    >
      {({ pressed }: iPressable) => (
        <ContainerCardItem pressed={pressed}>
          <CardTitle>{title}</CardTitle>
          <CardInfoIcon>
            <IconType />
            <CardText>{type}</CardText>
          </CardInfoIcon>
          {times.map(({ id_time, date, start_time, end_time }, index) => (
            <Fragment key={id_time}>
              {shouldRenderDays && (
                <CardTextDays>{index + 1}° dia</CardTextDays>
              )}
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
      )}
    </Pressable>
  );
}
