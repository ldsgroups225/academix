import { useRef } from "react";
import { Animated } from "react-native";

export const useInputAnimation = (initialValue: string) => {
  const animatedLabelValue = useRef(
    new Animated.Value(initialValue ? 1 : 0)
  ).current;
  const errorAnimationValue = useRef(new Animated.Value(0)).current;

  const animateLabel = (toValue: number) => {
    Animated.timing(animatedLabelValue, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animateError = () => {
    Animated.sequence([
      Animated.timing(errorAnimationValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(errorAnimationValue, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(errorAnimationValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(errorAnimationValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {
    animatedLabelValue,
    errorAnimationValue,
    animateLabel,
    animateError,
  };
};
