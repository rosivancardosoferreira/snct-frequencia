import { images } from "assets/images";
import { AwaitRequest } from "presentation/components";
import React from "react";
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
  return (
    <ContainerHome>
      <AwaitRequest type="success" isOpen={false} />
      <HomeBoxHeader>
        <HomeTitle>Frequência SNCT 2022</HomeTitle>
        <HomeSubTitle>Registro de presença.</HomeSubTitle>
      </HomeBoxHeader>
      <HomeBoxBody>
        <HomeBox>
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
