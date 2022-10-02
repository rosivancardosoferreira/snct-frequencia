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
import { iPressable } from "_types/iPressable";

export function HeaderActivity({ title }: iHeaderActivity) {
  const navigation = useNavigation<IRouterProps>();
  return (
    <ContainerHeaderActivity>
      <Pressable onPress={() => navigation.goBack()}>
        {({ pressed }: iPressable) => (
          <HeaderActivityBack pressed={pressed}>
            <IconBack />
          </HeaderActivityBack>
        )}
      </Pressable>
      <HeaderActivityTitle numberOfLines={1}>{title}</HeaderActivityTitle>
    </ContainerHeaderActivity>
  );
}
