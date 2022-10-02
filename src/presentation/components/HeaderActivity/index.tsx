import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IconBack } from "assets/icons";
import { Pressable } from "react-native";
import { iHeaderActivity } from "_types/iActivity";
import { IRouterProps } from "_types/iNavigate";
import {
  ContainerHeaderActivity,
  HeaderActivityBack,
  HeaderActivityTitle
} from "./style";

export function HeaderActivity({ title }: iHeaderActivity) {
  const navigation = useNavigation<IRouterProps>();
  return (
    <ContainerHeaderActivity>
      <Pressable onPress={() => navigation.goBack()}>
        {({ pressed }: { pressed: boolean }) => (
          <HeaderActivityBack pressed={pressed}>
            <IconBack />
          </HeaderActivityBack>
        )}
      </Pressable>
      <HeaderActivityTitle>{title}</HeaderActivityTitle>
    </ContainerHeaderActivity>
  );
}
