import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Text, Animated, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@src/hooks";
import Typography from "@styles/typography";
import { ToastType, IToastParams, ToastMessageRef } from "./ToastTypes";
import { createStyles, TOAST_HEIGHT } from "./ToastStyles";

/**
 * A customizable toast message component.
 *
 * @example
 * ```tsx
 * const toastRef = useRef<ToastMessageRef>(null);
 * // ...
 * <ToastMessage ref={toastRef} />
 * // ...
 * toastRef.current?.open({ msg: "Hello, World!", type: ToastType.Success });
 * ```
 */
const ToastMessage = forwardRef<ToastMessageRef>((_, ref) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const animatedValue = useRef(new Animated.Value(-TOAST_HEIGHT)).current;

  const [state, setState] = useState<IToastParams>({
    type: ToastType.Info,
    msg: "",
  });

  const closeToast = useCallback(() => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: -TOAST_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, state?.duration || 1500);
  }, [animatedValue, state?.duration]);

  const showToast = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => closeToast());
  }, [animatedValue, closeToast]);

  const handlePressIn = useCallback(() => {
    animatedValue.stopAnimation();
  }, [animatedValue]);

  const handlePressOut = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: -TOAST_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  useImperativeHandle(ref, () => ({
    open(param: IToastParams) {
      setState({
        msg: param?.msg || "",
        duration: param.duration || 1500,
        type: param.type || ToastType.Info,
      });
      showToast();
    },
  }));

  const getToastColor = useCallback((type: ToastType): string => {
    switch (type) {
      case ToastType.Error:
        return theme.destructive;
      case ToastType.Success:
        return theme.accent;
      case ToastType.Warning:
        return theme.secondary;
      case ToastType.Info:
      default:
        return theme.primary;
    }
  }, [theme]);

  return (
      <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
      >
        <Animated.View
            style={[
              styles.root,
              {
                transform: [{ translateY: animatedValue }],
                backgroundColor: getToastColor(state.type as ToastType),
              },
            ]}
        >
          <Text
              style={[styles.text, Typography.body.medium(theme)]}
              numberOfLines={3}
          >
            {state?.msg}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
  );
});

export default memo(ToastMessage);