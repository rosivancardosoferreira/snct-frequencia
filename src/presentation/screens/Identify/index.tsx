import React, { Fragment } from "react";
import Moment from "moment";
import { FlatList, Keyboard, Pressable } from "react-native";
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
  IdentifyIdSuggestion,
  IdentifyItemSuggestion,
  IdentifyNameSuggestion,
  IdentifySearch,
  IdentifySuggestion,
  IdentifyTextInput
} from "./style";
import themes from "presentation/styles/defaultTheme";
import { AwaitRequest } from "presentation/components";

export function Identify() {
  const {
    titleActivity,
    timesActivity,
    shouldRenderDays,
    suggestionParticipants,
    isOpenSuggestion,
    checkinCode,
    onActionSucess,
    onChangeInput,
    goBack,
    onCheckinParticipants
  } = useIdentify();

  return (
    <ContainerIdentify>
      <AwaitRequest
        titleFirstButton="Registrar outro"
        onPress={onActionSucess}
      />
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
            onChangeText={(e: { e: string }) => onChangeInput(String(e))}
            value={checkinCode}
          />
          <IdentifyIconSearch>
            <IconSearch />
          </IdentifyIconSearch>
          <IdentifySuggestion isOpen={isOpenSuggestion}>
            <FlatList
              data={suggestionParticipants}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <Pressable
                  key={item?.id_attendees}
                  onPress={() => {
                    Keyboard.dismiss();
                    onCheckinParticipants({
                      id_attendees: item?.id_attendees
                    });
                  }}
                >
                  {({ pressed }: iPressable) => (
                    <IdentifyItemSuggestion pressed={pressed}>
                      <IdentifyNameSuggestion>
                        {item?.name}
                      </IdentifyNameSuggestion>
                      <IdentifyIdSuggestion>
                        {item?.checkin_code}
                      </IdentifyIdSuggestion>
                    </IdentifyItemSuggestion>
                  )}
                </Pressable>
              )}
            />
          </IdentifySuggestion>
        </IdentifySearch>
      </IdentifyHeader>
      <IdentifyFooter isOpenIdentifySuggestion={isOpenSuggestion}>
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
