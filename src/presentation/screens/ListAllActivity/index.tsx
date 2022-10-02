import React from "react";
import {
  AwaitRequest,
  CardItem,
  HeaderActivity
} from "presentation/components";
import { ContainerListAllActivity, ListActivityBody } from "./style";
import { useListAllActivity } from "./useListAllActivity";

export function ListAllActivity() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { isRequest } = useListAllActivity();
  return (
    <ContainerListAllActivity>
      <HeaderActivity title="Todas atividades" />
      <AwaitRequest type="success" isOpen={isRequest} />
      <ListActivityBody>
        {data.map((_, index) => (
          <CardItem
            key={index}
            title="Nome da atividade aqui, nomes grandes também não devem tralalaal"
          />
        ))}
      </ListActivityBody>
    </ContainerListAllActivity>
  );
}
