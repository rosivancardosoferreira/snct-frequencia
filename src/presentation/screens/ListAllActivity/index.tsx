import React from "react";
import { ContainerListAllActivity, ListActivityBody } from "./style";
import { useListAllActivity } from "./useListAllActivity";
import {
  CardItem,
  HeaderActivity,
  ListActivityEmpty
} from "presentation/components";
import { FlatList } from "react-native";

export function ListAllActivity() {
  const { dataAllactivitys } = useListAllActivity();
  return (
    <ContainerListAllActivity>
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
          ListEmptyComponent={() => <ListActivityEmpty />}
        />
      </ListActivityBody>
    </ContainerListAllActivity>
  );
}
