import React from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import CsText from "@components/commons/CsText";

interface SkipButtonProps {
  opacity: Animated.Value;
  onPress: () => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ opacity, onPress }) => (
  <Animated.View style={[styles.skipButton, { opacity }]}>
    <TouchableOpacity onPress={onPress}>
      <CsText variant="body" size="small" color="secondary">
        Passer
      </CsText>
    </TouchableOpacity>
  </Animated.View>
);

const styles = StyleSheet.create({
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
});

export default SkipButton;
