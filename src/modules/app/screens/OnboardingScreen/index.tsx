import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@hooks/useTheme";
import OnboardingCarousel from "./components/OnboardingCarousel";
import OnboardingNavigation from "./components/OnboardingNavigation";
import SkipButton from "./components/SkipButton";
import { useOnboardingNavigation } from "./hooks/useOnboardingNavigation";
import { useOnboardingAnimation } from "./hooks/useOnboardingAnimation";
import { onboardingData } from "./data";

const OnboardingScreen: React.FC = () => {
  const theme = useTheme();
  const {
    currentIndex,
    handleNext,
    handlePrev,
    handleFinish,
    checkOnboardingStatus,
  } = useOnboardingNavigation();
  const { scrollX, skipOpacity, fadeOutSkipButton, fadeInSkipButton } =
    useOnboardingAnimation();

  useEffect(() => {
    checkOnboardingStatus().then((r) => r);
  }, [checkOnboardingStatus]);

  return (
    <LinearGradient
      colors={[theme.background, `${theme.primary}20`]}
      style={styles.container}
    >
      <SkipButton opacity={skipOpacity} onPress={handleFinish} />
      <OnboardingCarousel
        data={onboardingData}
        scrollX={scrollX}
        onIndexChange={(newIndex) => {
          if (newIndex === onboardingData.length - 1) {
            fadeOutSkipButton();
          } else {
            fadeInSkipButton();
          }
        }}
      />
      <OnboardingNavigation
        currentIndex={currentIndex}
        totalSlides={onboardingData.length}
        scrollX={scrollX}
        onPrev={handlePrev}
        onNext={handleNext}
        onFinish={handleFinish}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OnboardingScreen;
