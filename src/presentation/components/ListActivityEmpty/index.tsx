import { images } from "assets/images";
import React from "react";
import {
  ContainerListActivityEmpty,
  ListActivityEmptyImage,
  ListActivityEmptySubTitle,
  ListActivityEmptyTitle
} from "./style";

export function ListActivityEmpty() {
  return (
    <ContainerListActivityEmpty>
      <ListActivityEmptyImage source={images.Empty} resizeMode="contain" />
      <ListActivityEmptyTitle>Nenhum item</ListActivityEmptyTitle>
      <ListActivityEmptySubTitle>Algo deu errado</ListActivityEmptySubTitle>
    </ContainerListActivityEmpty>
  );
}
