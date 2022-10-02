import React, { Fragment } from "react";
import Moment from "moment";
import { Pressable, TextInput } from "react-native";
import { useIdentify } from "./useIdentify";
import { HeaderActivityBack } from "presentation/components/HeaderActivity/style";
import { IconBack, IconSearch } from "assets/icons";
import { iPressable } from "_types/iPressable";
import {
  ContainerIdentify,
  IdentifyFooter,
  IdentifyFooterTitle,
  IdentifyHeader,
  IdentifyHeaderDays,
  IdentifyHeaderInfos,
  IdentifyHeaderTitle,
  IdentifyIconSearch,
  IdentifySearch,
  IdentifyTextInput
} from "./style";
import themes from "presentation/styles/defaultTheme";

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
        <IdentifyHeaderTitle>Identificação participante</IdentifyHeaderTitle>
        <IdentifySearch>
          <IdentifyTextInput
            placeholderTextColor={themes.colors.secondaryGray}
            cursorColor={themes.colors.secondaryDark}
            placeholder="Identificação"
            keyboardType="numeric"
          />
          <IdentifyIconSearch>
            <IconSearch />
          </IdentifyIconSearch>
        </IdentifySearch>
        <TextInput keyboardType="number-pad" />
      </IdentifyHeader>
      <IdentifyFooter>
        <IdentifyFooterTitle>{titleActivity}</IdentifyFooterTitle>
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
      </IdentifyFooter>
    </ContainerIdentify>
  );
}
