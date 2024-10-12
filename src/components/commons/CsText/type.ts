import { TextProps } from "react-native";
import useTheme from "@hooks/useTheme";

export interface CsTextProps extends TextProps {
  variant?: "headline" | "title" | "body" | "label";
  size?: "large" | "medium" | "small";
  color?: keyof ReturnType<typeof useTheme>;
}
