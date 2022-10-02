import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  ListAllActivity: undefined;
};

export type IRouterProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
