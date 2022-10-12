import React, { Fragment } from "react";
import Moment from "moment";
import { FlatList, Pressable } from "react-native";
import { useIdentify } from "./useIdentify";
import { HeaderActivityBack } from "presentation/components/HeaderActivity/style";
import { IconBack, IconQRCode, IconSearch } from "assets/icons";
import { iPressable } from "_types/iPressable";
import {
  ContainerIdentify,
  IdentifyButtonQRCode,
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
  IdentifyQRCode,
  IdentifyQRCodeTextButton,
  IdentifySearch,
  IdentifySuggestion,
  IdentifyTextInput,
  PressableBackStyle,
  SuggestionEmpty,
  SuggestionEmptyButtonQRCode,
  SuggestionEmptyQRCode,
  SuggestionEmptyTitle
} from "./style";
import themes from "presentation/styles/defaultTheme";
import {
  AwaitRequest,
  CameraIdentify,
  ModalAlert
} from "presentation/components";

export function Identify() {
  const {
    titleActivity,
    timesActivity,
    shouldRenderDays,
    suggestionParticipants,
    isOpenSuggestion,
    checkinCode,
    shoulHiddeFooter,
    shouldRenderEmpty,
    onOpenCamera,
    onActionSucess,
    onChangeInput,
    goBack,
    onCheckinParticipants,
    onConfirmIdentify
  } = useIdentify();

  return (
    <ContainerIdentify>
      <AwaitRequest
        titleFirstButton="Credenciar outro"
        onPress={onActionSucess}
      />
      <CameraIdentify isOpen={false} />
      <ModalAlert onAction={onCheckinParticipants} />
      <IdentifyHeader>
        <Pressable onPress={goBack} style={PressableBackStyle}>
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
          <IdentifyButtonQRCode onPress={onOpenCamera}>
            {({ pressed }: iPressable) => (
              <IdentifyQRCode pressed={pressed}>
                <IconQRCode />
                <IdentifyQRCodeTextButton>Ler QRCode</IdentifyQRCodeTextButton>
              </IdentifyQRCode>
            )}
          </IdentifyButtonQRCode>
          <IdentifySuggestion isOpen={isOpenSuggestion}>
            <FlatList
              data={suggestionParticipants}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <Pressable
                  key={item?.id_attendees}
                  onPress={() => {
                    onConfirmIdentify({
                      id_attendees: item?.id_attendees,
                      name: item?.name
                    });
                    // Keyboard.dismiss();
                    // onCheckinParticipants({
                    //   id_attendees: item?.id_attendees
                    // });
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
              ListEmptyComponent={() => (
                <SuggestionEmpty shouldRenderEmpty={shouldRenderEmpty}>
                  <SuggestionEmptyTitle>
                    Sem correspondentes
                  </SuggestionEmptyTitle>
                  <SuggestionEmptyButtonQRCode onPress={onOpenCamera}>
                    {({ pressed }: iPressable) => (
                      <SuggestionEmptyQRCode pressed={pressed}>
                        <IconQRCode />
                        <IdentifyQRCodeTextButton>
                          Ler QRCode
                        </IdentifyQRCodeTextButton>
                      </SuggestionEmptyQRCode>
                    )}
                  </SuggestionEmptyButtonQRCode>
                </SuggestionEmpty>
              )}
            />
          </IdentifySuggestion>
        </IdentifySearch>
      </IdentifyHeader>
      <IdentifyFooter isOpenIdentifySuggestion={shoulHiddeFooter}>
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
