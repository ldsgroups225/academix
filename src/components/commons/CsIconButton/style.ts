import { ViewStyle } from "react-native";
import { ITheme } from "@styles/theme";

export type IconButtonSize = "sm" | "md" | "lg";

export const getIconButtonStyles = (size: IconButtonSize): ViewStyle => {
  return {
    ...baseStyle,
    ...sizeStyles[size],
  };
};

const baseStyle: ViewStyle = {
  borderRadius: 999, // This creates a circular button
  overflow: "hidden",
  backgroundColor: "transparent",
};

const sizeStyles: Record<IconButtonSize, ViewStyle> = {
  sm: {
    padding: 6,
    width: 32,
    height: 32,
  },
  md: {
    padding: 8,
    width: 40,
    height: 40,
  },
  lg: {
    padding: 10,
    width: 48,
    height: 48,
  },
};

export const getRippleColor = (theme: ITheme): string => {
  return theme.muted;
};
