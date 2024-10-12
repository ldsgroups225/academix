import React, { useRef } from "react";
import { Animated, TextInput } from "react-native";
import { CsInputRef } from "../type";

export const useInputState = (
  initialValue: string,
  initialSecureTextEntry: boolean,
  forwardedRef: React.Ref<CsInputRef>
) => {
  const isFocused = useRef(false);
  const error = useRef("");
  const secureEntry = useRef(initialSecureTextEntry);
  const inputRef = useRef<TextInput>(null);
  const animatedLabelValue = useRef(new Animated.Value(initialValue ? 1 : 0));
  const errorAnimationValue = useRef(new Animated.Value(0));

  React.useImperativeHandle(forwardedRef, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => inputRef.current?.clear(),
  }));

  const getSecureEntry = () => secureEntry.current;

  return {
    isFocused,
    error,
    secureEntry,
    getSecureEntry,
    inputRef,
    animatedLabelValue,
    errorAnimationValue,
  };
};
