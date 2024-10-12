import { Animated, StyleSheet } from "react-native";
import { ITheme } from "@styles/theme";

export const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: theme.background,
    },
    input: {
      flex: 1,
      height: 48,
      paddingHorizontal: 16,
      color: theme.foreground,
      fontFamily: "Poppins-Regular",
      fontSize: 16,
    },
    inputWithRightIcon: {
      paddingRight: 48,
    },
    inputWithLeftIcon: {
      paddingLeft: 48,
    },
    icon: {
      position: "absolute",
      right: 12,
      height: "100%",
      justifyContent: "center",
    },
    error: {
      marginTop: 4,
    },
    rtlText: {
      textAlign: "right",
    },
  });

export const getLabelAnimatedStyle = (
  theme: ITheme,
  animatedLabelValue: Animated.Value,
  isRTL: boolean
) => ({
  left: isRTL ? undefined : 0,
  right: isRTL ? 0 : undefined,
  top: -2,
  fontSize: animatedLabelValue.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 12],
  }),
  color: animatedLabelValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.mutedForeground, theme.primary],
  }),
});
