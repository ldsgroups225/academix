import React from "react";
import { ViewStyle } from "react-native";
import { IconButtonSize } from "./style";

export interface CsIconButtonProps {
  onPress: () => void;
  size?: IconButtonSize;
  disabled?: boolean;
  icon: React.ReactElement;
  color?: string;
  style?: ViewStyle;
}
