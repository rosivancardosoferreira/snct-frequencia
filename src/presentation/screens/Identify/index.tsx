import React, { Fragment } from "react";
import Moment from "moment";
import { Pressable } from "react-native";
import { useIdentify } from "./useIdentify";
import { HeaderActivityBack } from "presentation/components/HeaderActivity/style";
import { IconBack } from "assets/icons";
import { iPressable } from "_types/iPressable";
import {
  ContainerIdentify,
  IdentifyBody,
  IdentifyHeader,
  IdentifyHeaderDays,
  IdentifyHeaderInfos,
  IdentifyHeaderTitle
} from "./style";

export function Identify() {
  const { id_session, titleActivity, timesActivity, shouldRenderDays, goBack } =
    useIdentify();

  return (
    <ContainerIdentify>
      <IdentifyHeader>
        <Pressable onPress={goBack}>
          {({ pressed }: iPressable) => (
            <HeaderActivityBack pressed={pressed}>
              <IconBack />
            </HeaderActivityBack>
          )}
        </Pressable>
        <IdentifyHeaderTitle>{titleActivity}</IdentifyHeaderTitle>
        {timesActivity.map(({ id_time, date, start_time, end_time }, index) => (
          <Fragment key={id_time}>
            {shouldRenderDays && (
              <IdentifyHeaderDays>{index + 1}° dia</IdentifyHeaderDays>
            )}
            <IdentifyHeaderInfos>
              {Moment(date).format("DD/MM/YYYY")} de {start_time} as {end_time}
            </IdentifyHeaderInfos>
          </Fragment>
        ))}
      </IdentifyHeader>
      <IdentifyBody>
        <IdentifyHeaderInfos>IDENTIFICAR</IdentifyHeaderInfos>
      </IdentifyBody>
    </ContainerIdentify>
  );
}
