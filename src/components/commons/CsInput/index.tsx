import { forwardRef } from "react";
import { Animated, View } from "react-native";
import useThemedStyles from "@hooks/useThemedStyles";
import { CsInputProps, CsInputRef } from "./type";
import { createStyles } from "./style";
import AnimatedLabel from "./components/AnimatedLabel";
import InputField from "./components/InputField";
import ErrorMessage from "./components/ErrorMessage";
import { useInputState } from "./hooks/useInputState";
import { useInputHandlers } from "./hooks/useInputHandlers";

const CsInput = forwardRef<CsInputRef, CsInputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChangeText,
      validation,
      style,
      inputStyle,
      labelStyle,
      errorStyle,
      throttleTime = 300,
      secureTextEntry = false,
      icon,
      iconPosition = "right",
      onIconPress,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const themedStyles = useThemedStyles(createStyles);
    const {
      isFocused,
      error,
      secureEntry,
      getSecureEntry,
      inputRef,
      animatedLabelValue,
      errorAnimationValue,
    } = useInputState(value, secureTextEntry, ref);

 
    const { handleFocus, handleBlur, handleChangeText, toggleSecureEntry } =
      useInputHandlers({
        onChangeText,
        validation,
        throttleTime,
        onFocus,
        onBlur,
        setIsFocused: (focused) => (isFocused.current = focused),
        setError: (err) => (error.current = err),
        setSecureEntry: (secure) => (secureEntry.current = secure),
        getSecureEntry,
        animateLabel: (toValue) => {
          Animated.timing(animatedLabelValue.current, {
            toValue,
            duration: 200,
            useNativeDriver: false,
          }).start();
        },
        animateError: () => {
          // Implement error animation if needed
        },
      });

    return (
      <View style={[themedStyles.container, style]}>
        <AnimatedLabel
          label={label}
          animatedLabelValue={animatedLabelValue.current}
          style={labelStyle}
        />
        <InputField
          ref={inputRef}
          value={value}
          placeholder={isFocused.current ? placeholder : ""}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureEntry.current}
          toggleSecureEntry={toggleSecureEntry}
          icon={icon}
          iconPosition={iconPosition}
          onIconPress={onIconPress}
          style={[themedStyles.input, inputStyle]}
          {...props}
        />
        <ErrorMessage
          error={error.current}
          errorAnimationValue={errorAnimationValue.current}
          style={[themedStyles.error, errorStyle]}
        />
      </View>
    );
  }
);

export default CsInput;
