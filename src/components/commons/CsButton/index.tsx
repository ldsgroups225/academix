import React, { useMemo } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import throttle from "lodash.throttle";
import useThemedStyles from "@hooks/useThemedStyles";
import useTheme from "@hooks/useTheme";
import {
  getButtonStyles,
  getRippleColor,
  getTextColor,
  getTextSize,
} from "./style";
import CsText from "@components/commons/CsText";
import { ITheme } from "@styles/theme";
import { CsButtonProps } from "./type";

const CsButton: React.FC<CsButtonProps> = ({
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  style,
}) => {
  const theme = useTheme();
  const scale = useSharedValue(1);

  const themedStyles = useThemedStyles((theme: ITheme) => ({
    button: {
      ...getButtonStyles(theme, variant, size),
      opacity: disabled ? 0.5 : 1,
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      marginHorizontal: 8,
    },
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const throttledOnPress = useMemo(
    () => throttle(onPress, 1000, { trailing: false }),
    [onPress]
  );

  const renderContent = () => {
    if (typeof children === "string") {
      return (
        <CsText
          variant="label"
          size={getTextSize(size)}
          color={getTextColor(variant)}
        >
          {children}
        </CsText>
      );
    }
    return children;
  };

  return (
    <Pressable
      onPress={throttledOnPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      android_ripple={
        variant !== "link"
          ? { color: getRippleColor(theme, variant) }
          : undefined
      }
    >
      <Animated.View style={[themedStyles.button, animatedStyle, style]}>
        <View style={themedStyles.content}>
          {leftIcon && (
            <Animated.View style={themedStyles.icon}>{leftIcon}</Animated.View>
          )}
          {renderContent()}
          {rightIcon && (
            <Animated.View style={themedStyles.icon}>{rightIcon}</Animated.View>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default CsButton;
