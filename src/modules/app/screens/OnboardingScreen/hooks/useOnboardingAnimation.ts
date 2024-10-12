import { useRef } from "react";
import { Animated } from "react-native";

export const useOnboardingAnimation = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const skipOpacity = useRef(new Animated.Value(1)).current;

  const fadeOutSkipButton = () => {
    Animated.timing(skipOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeInSkipButton = () => {
    Animated.timing(skipOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return {
    scrollX,
    skipOpacity,
    fadeOutSkipButton,
    fadeInSkipButton,
  };
};
