import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { iCardItem } from "./iActivity";

interface IdentifyParams
  extends Pick<iCardItem, "title" | "times" | "id_session"> {}

export type RootStackParamList = {
  Home: undefined;
  ListAllActivity: undefined;
  Identify: IdentifyParams;
  CameraRead: undefined;
};

export type IRootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type IRouterProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
