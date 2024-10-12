import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import CsButton from "@components/commons/CsButton";
import useTheme from "@hooks/useTheme";
import CsIconButton from "@components/commons/CsIconButton";

const { width } = Dimensions.get("window");

interface OnboardingNavigationProps {
  currentIndex: number;
  totalSlides: number;
  scrollX: Animated.Value;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentIndex,
  totalSlides,
  scrollX,
  onPrev,
  onNext,
  onFinish,
}) => {
  const theme = useTheme();

  const renderPaginationDots = () => (
    <View style={styles.paginationDots}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.paginationDot,
            {
              backgroundColor: scrollX.interpolate({
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [theme.border, theme.accent, theme.border],
                extrapolate: "clamp",
              }),
            },
          ]}
        />
      ))}
    </View>
  );

  const renderNavigationButton = () =>
    currentIndex < totalSlides - 1 ? (
      <CsIconButton
        onPress={onNext}
        size="md"
        icon={
          <Feather name="chevron-right" size={24} color={theme.secondary} />
        }
        color={theme.destructive}
      />
    ) : (
      <CsButton
        onPress={onFinish}
        variant="primary"
        size="md"
        style={styles.startButton}
      >
        Commencer l'aventure
      </CsButton>
    );

  return (
    <View style={styles.navigation}>
      {currentIndex > 0 && (
        <CsIconButton
          onPress={onPrev}
          size="md"
          icon={
            <Feather name="chevron-left" size={24} color={theme.secondary} />
          }
          color={theme.destructive}
        />
      )}
      {renderPaginationDots()}
      {renderNavigationButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  navButton: {
    padding: 10,
  },
  paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  startButton: {
    paddingHorizontal: 20,
  },
});

export default OnboardingNavigation;
