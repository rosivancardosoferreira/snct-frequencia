import { useNavigation } from "@react-navigation/native";
import { images } from "assets/images";
import { AwaitRequest } from "presentation/components";
import React from "react";
import { IRouterProps } from "_types/iNavigate";
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
      <AwaitRequest type="success" isOpen={false} />
      <HomeBoxHeader>
        <HomeTitle>Frequência SNCT 2022</HomeTitle>
        <HomeSubTitle>Registro de presença.</HomeSubTitle>
      </HomeBoxHeader>
      <HomeBoxBody>
        <HomeBox onPress={() => navigation.push("ListAllActivity")}>
          <HomeCardTitle>Todas atividades</HomeCardTitle>
          <HomeBoxImage source={images.All} resizeMode="contain" />
        </HomeBox>
        <HomeBoxToday>
          <HomeCardTitle>Atividades{"\n"}de hoje</HomeCardTitle>
          <HomeBoxImage source={images.Today} resizeMode="contain" />
        </HomeBoxToday>
      </HomeBoxBody>
    </ContainerHome>
  );
}
