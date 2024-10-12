import React from "react";
import { Animated, StyleProp, TextStyle } from "react-native";
import CsText from "@components/commons/CsText";

interface ErrorMessageProps {
  error: string;
  errorAnimationValue: Animated.Value;
  style?: StyleProp<TextStyle>;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  errorAnimationValue,
  style,
}) => {
  if (!error) return null;

  return (
    <Animated.View style={{ transform: [{ translateX: errorAnimationValue }] }}>
      <CsText variant="label" size="small" color="destructive" style={style}>
        {error}
      </CsText>
    </Animated.View>
  );
};

export default ErrorMessage;
