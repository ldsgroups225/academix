import React, { useMemo } from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import throttle from "lodash.throttle";
import useThemedStyles from "@hooks/useThemedStyles";
import useTheme from "@hooks/useTheme";
import { getIconButtonStyles, getRippleColor } from "./style";
import { CsIconButtonProps } from "./type";

const CsIconButton: React.FC<CsIconButtonProps> = ({
  onPress,
  size = "md",
  disabled = false,
  icon,
  color,
  style,
}) => {
  const theme = useTheme();
  const scale = useSharedValue(1);

  const themedStyles = useThemedStyles(() => ({
    pressable: {
      ...getIconButtonStyles(size),
      opacity: disabled ? 0.5 : 1,
    },
    animatedContent: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
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
    () => throttle(onPress, 300, { trailing: false }),
    [onPress]
  );

  return (
    <Pressable
      onPress={throttledOnPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[themedStyles.pressable, style]}
      android_ripple={{ color: getRippleColor(theme) }}
    >
      <Animated.View style={[themedStyles.animatedContent, animatedStyle]}>
        {React.cloneElement(icon, { color: color || theme.foreground })}
      </Animated.View>
    </Pressable>
  );
};

export default CsIconButton;
