import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { iCardItem } from "./iActivity";

interface IdentifyParams
  extends Pick<iCardItem, "title" | "times" | "id_session"> {}

interface CameraReadParams {
  id_session: number;
}

export type RootStackParamList = {
  Home: undefined;
  ListAllActivity: undefined;
  Identify: IdentifyParams;
  CameraRead: CameraReadParams;
};

export type IRootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type IRouterProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
