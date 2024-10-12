import React from "react";
import { Text } from "react-native";
import { Typography } from "@styles/typography";
import useThemedStyles from "@hooks/useThemedStyles";
import { ITheme } from "@styles/theme";
import { CsTextProps } from "./type";

const CsText: React.FC<CsTextProps> = ({
  variant = "body",
  size = "medium",
  color,
  style,
  children,
  ...props
}) => {
  const themedStyles = useThemedStyles((theme: ITheme) => ({
    text: {
      ...Typography[variant][size](theme),
      color: color ? theme[color] : undefined,
    },
  }));

  return (
    <Text style={[themedStyles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default CsText;
