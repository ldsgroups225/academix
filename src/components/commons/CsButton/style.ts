import { ViewStyle } from "react-native";
import { ITheme } from "@styles/theme";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export const getButtonStyles = (
  theme: ITheme,
  variant: ButtonVariant,
  size: ButtonSize
): ViewStyle => {
  return {
    ...baseStyle,
    ...variantStyles[variant](theme),
    ...sizeStyles[size],
  };
};

const baseStyle: ViewStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

const variantStyles: Record<ButtonVariant, (theme: ITheme) => ViewStyle> = {
  primary: (theme) => ({
    backgroundColor: theme.primary,
  }),
  secondary: (theme) => ({
    backgroundColor: theme.secondary,
  }),
  destructive: (theme) => ({
    backgroundColor: theme.destructive,
  }),
  outline: (theme) => ({
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.primary,
  }),
  ghost: () => ({
    backgroundColor: "transparent",
  }),
  link: () => ({
    backgroundColor: "transparent",
  }),
};

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  icon: {
    padding: 12,
    aspectRatio: 1,
  },
};

export const getTextColor = (variant: ButtonVariant): keyof ITheme => {
  switch (variant) {
    case "outline":
    case "ghost":
    case "link":
      return "primary";
    case "secondary":
      return "secondaryForeground";
    case "destructive":
      return "destructiveForeground";
    default:
      return "primaryForeground";
  }
};

export const getTextSize = (size: ButtonSize): "small" | "medium" | "large" => {
  switch (size) {
    case "sm":
      return "small";
    case "lg":
      return "large";
    default:
      return "medium";
  }
};

export const getRippleColor = (
  theme: ITheme,
  variant: ButtonVariant
): string => {
  switch (variant) {
    case "primary":
    case "secondary":
    case "destructive":
      return theme.primaryForeground;
    case "outline":
    case "ghost":
    case "link":
      return theme.primary;
    default:
      return theme.muted;
  }
};
