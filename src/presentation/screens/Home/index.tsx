import React from "react";
import { useNavigation } from "@react-navigation/native";
import { images } from "assets/images";
import { Pressable } from "react-native";
import { IRouterProps } from "_types/iNavigate";
import { iPressable } from "_types/iPressable";
import { AwaitRequest } from "presentation/components";
import { useHome } from "./useHome";
import {
  ContainerHome,
  HomeBox,
  HomeBoxBody,
  HomeBoxHeader,
  HomeBoxImage,
  HomeCardTitle,
  HomeSubTitle,
  HomeTitle
} from "./style";

export function Home() {
  const navigation = useNavigation<IRouterProps>();
  const { onActionRequest } = useHome();

  return (
    <ContainerHome>
      <AwaitRequest onPress={onActionRequest} />
      <HomeBoxHeader>
        <HomeTitle>Frequência SNCT 2022</HomeTitle>
        <HomeSubTitle>Registro de presença.</HomeSubTitle>
      </HomeBoxHeader>
      <HomeBoxBody>
        <Pressable onPress={() => navigation.navigate("ListAllActivity")}>
          {({ pressed }: iPressable) => (
            <HomeBox pressed={pressed}>
              <HomeCardTitle>Todas atividades</HomeCardTitle>
              <HomeBoxImage source={images.All} resizeMode="contain" />
            </HomeBox>
          )}
        </Pressable>
        {/* <Pressable onPress={testeOpemmodal}>
          {({ pressed }: iPressable) => (
            <HomeBoxToday pressed={pressed}>
              <HomeCardTitle>Atividades{"\n"}de hoje</HomeCardTitle>
              <HomeBoxImage source={images.Today} resizeMode="contain" />
            </HomeBoxToday>
          )}
        </Pressable> */}
        {/* <Pressable onPress={() => navigation.navigate("ListAllActivity")}>
          {({ pressed }: iPressable) => (
            <HomeBoxToday pressed={pressed}>
              <HomeCardTitle>Prontos para{"\n"}sincronizar</HomeCardTitle>
              <HomeBoxImage source={images.Today} resizeMode="contain" />
            </HomeBoxToday>
          )}
        </Pressable> */}
      </HomeBoxBody>
      {/* <HomeFooter isOnline={isOnline}>
        <FooterText>Você está offline</FooterText>
      </HomeFooter> */}
    </ContainerHome>
  );
}
