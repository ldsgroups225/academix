import React, { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CsText from "@components/commons/CsText";
import CsButton from "@components/commons/CsButton";
import useTheme from "@hooks/useTheme";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = () => {
  // const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const lottieRef = useRef(null);

  const logoScale = useSharedValue(0);
  const logoRotate = useSharedValue(0);
  const buttonScale = useSharedValue(1);

  useEffect(() => {
    logoScale.value = withTiming(1, {
      duration: 2000,
      easing: Easing.elastic(1),
    });
    logoRotate.value = withTiming(720, {
      duration: 2000,
      easing: Easing.out(Easing.cubic),
    });
    (lottieRef.current as unknown as { play: () => void })?.play();

    buttonScale.value = withRepeat(
      withSequence(withSpring(1.05), withSpring(1)),
      -1,
      true
    );
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { rotateY: `${logoRotate.value}deg` },
    ],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  const handleStart = () => {
    // Navigate to the next screen
    // navigation.navigate('Onboarding');
  };

  return (
    <LinearGradient
      colors={[theme.background, `${theme.primary}20`]}
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <LottieView
          ref={lottieRef}
          source={require("@assets/animations/book-opening.json")}
          style={styles.lottie}
          loop={false}
        />
      </Animated.View>
      <View style={styles.textContainer}>
        <CsText
          variant="headline"
          size="large"
          color="primary"
          style={styles.title}
        >
          Bienvenue sur Academix !
        </CsText>
        <CsText
          variant="body"
          size="medium"
          color="foreground"
          style={styles.subtitle}
        >
          Votre compagnon d'études personnalisé pour réussir au baccalauréat
        </CsText>
      </View>
      <Animated.View style={[styles.buttonContainer, buttonStyle]}>
        <CsButton
          onPress={handleStart}
          variant="primary"
          size="lg"
          style={styles.button}
        >
          Commencer
        </CsButton>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: width * 0.8,
    height: height * 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  lottie: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: "90%",
  },
  buttonContainer: {
    marginBottom: 40,
    width: "80%",
  },
  button: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    fontFamily: "Poppins-Bold",
  },
});

export default WelcomeScreen;
