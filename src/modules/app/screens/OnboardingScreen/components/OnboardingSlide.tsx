import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import LottieView, { AnimationObject } from "lottie-react-native";
import CsText from "@components/commons/CsText";

const { width, height } = Dimensions.get("window");

interface OnboardingSlideProps {
  item: {
    title: string;
    description: string;
    animation: string | AnimationObject | { uri: string } | undefined;
  };
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ item }) => {
  return (
    <View style={styles.slide}>
      <LottieView
        source={item.animation}
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.textContainer}>
        <CsText
          variant="title"
          size="large"
          color="primary"
          style={styles.title}
        >
          {item.title}
        </CsText>
        <CsText
          variant="body"
          size="medium"
          color="foreground"
          style={styles.description}
        >
          {item.description}
        </CsText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: width * 0.8,
    height: height * 0.4,
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    marginTop: 40,
  },
  title: {
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    textAlign: "left",
  },
});

export default OnboardingSlide;
