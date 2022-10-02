import React from "react";
import { useNavigation } from "@react-navigation/native";
import { images } from "assets/images";
import { Pressable } from "react-native";
import { IRouterProps } from "_types/iNavigate";
import { iPressable } from "_types/iPressable";
import {
  ContainerHome,
  HomeBox,
  HomeBoxBody,
  HomeBoxHeader,
  HomeBoxImage,
  HomeBoxToday,
  HomeCardTitle,
  HomeSubTitle,
  HomeTitle
} from "./style";

export function Home() {
  const navigation = useNavigation<IRouterProps>();
  return (
    <ContainerHome>
      <HomeBoxHeader>
        <HomeTitle>Frequência SNCT 2022</HomeTitle>
        <HomeSubTitle>Registro de presença.</HomeSubTitle>
      </HomeBoxHeader>
      <HomeBoxBody>
        <Pressable onPress={() => navigation.push("ListAllActivity")}>
          {({ pressed }: iPressable) => (
            <HomeBox pressed={pressed}>
              <HomeCardTitle>Todas atividades</HomeCardTitle>
              <HomeBoxImage source={images.All} resizeMode="contain" />
            </HomeBox>
          )}
        </Pressable>
        <Pressable onPress={() => navigation.push("ListAllActivity")}>
          {({ pressed }: iPressable) => (
            <HomeBoxToday pressed={pressed}>
              <HomeCardTitle>Atividades{"\n"}de hoje</HomeCardTitle>
              <HomeBoxImage source={images.Today} resizeMode="contain" />
            </HomeBoxToday>
          )}
        </Pressable>
      </HomeBoxBody>
    </ContainerHome>
  );
}
