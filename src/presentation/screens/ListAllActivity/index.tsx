import React from "react";
import { ContainerListAllActivity, ListActivityBody } from "./style";
import { useListAllActivity } from "./useListAllActivity";
import {
  AwaitRequest,
  CardItem,
  HeaderActivity
} from "presentation/components";
import { FlatList } from "react-native";

export function ListAllActivity() {
  const { onActionRequest, dataAllactivitys } = useListAllActivity();
  return (
    <ContainerListAllActivity>
      <AwaitRequest onPress={onActionRequest} />
      <HeaderActivity title={"Todas atividades"} />
      <ListActivityBody>
        <FlatList
          data={dataAllactivitys}
          renderItem={({ item }) => (
            <CardItem
              key={item.id_session}
              title={item.title}
              type={item.type}
              times={item.times}
              id_session={item.id_session}
            />
          )}
        />
      </ListActivityBody>
    </ContainerListAllActivity>
  );
}
