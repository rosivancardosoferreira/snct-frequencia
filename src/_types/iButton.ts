import { StyleProp, ViewStyle } from "react-native";

export interface iButton {
  title: string;
  style?: StyleProp<ViewStyle>;
  variant?: "primary";
  top?: number;
  bottom?: number;
  onPress?: () => void;
}

export interface iUIButton {
  top?: number;
  bottom?: number;
  pressed: boolean;
}

export interface iUIButtonInside {
  pressed: boolean;
  variant: "primary";
}
