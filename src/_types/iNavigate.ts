import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  ListActivity: undefined;
};

export type IRouterProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
