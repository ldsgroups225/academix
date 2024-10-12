import React from "react";
import { Animated, I18nManager, StyleProp, TextStyle } from "react-native";
import { getLabelAnimatedStyle } from "../style";
import useTheme from "@hooks/useTheme";

interface AnimatedLabelProps {
  label: string;
  animatedLabelValue: Animated.Value;
  style?: StyleProp<TextStyle>;
}

const AnimatedLabel: React.FC<AnimatedLabelProps> = ({
  label,
  animatedLabelValue,
  style,
}) => {
  const theme = useTheme();
  const labelAnimatedStyle = getLabelAnimatedStyle(
    theme,
    animatedLabelValue,
    I18nManager.isRTL
  );

  return (
    <Animated.Text style={[labelAnimatedStyle, style]}>{label}</Animated.Text>
  );
};

export default AnimatedLabel;
