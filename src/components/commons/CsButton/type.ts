import React from "react";
import { ViewStyle } from "react-native";
import { ButtonSize, ButtonVariant } from "./style";

export interface CsButtonProps {
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
}
