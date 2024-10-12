import { useCallback } from "react";
import throttle from "lodash.throttle";

interface UseInputHandlersProps {
  onChangeText: (text: string | null | undefined) => void;
  validation?: (value: string) => string | undefined;
  throttleTime: number;
  onFocus?: () => void;
  onBlur?: () => void;
  setIsFocused: (focused: boolean) => void;
  setError: (error: string) => void;
  setSecureEntry: (secure: boolean) => void;
  getSecureEntry: () => boolean;
  animateLabel: (toValue: number) => void;
  animateError: () => void;
}

export const useInputHandlers = ({
  onChangeText,
  validation,
  throttleTime,
  onFocus,
  onBlur,
  setIsFocused,
  setError,
  setSecureEntry,
  getSecureEntry,
  animateLabel,
  animateError,
}: UseInputHandlersProps) => {
  const handleFocus = useCallback(() => {
    setIsFocused(true);
    animateLabel(1);
    onFocus && onFocus();
  }, [setIsFocused, animateLabel, onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    animateLabel(0);
    onBlur && onBlur();
  }, [setIsFocused, animateLabel, onBlur]);

  const handleChangeText = useCallback(
    throttle((text: string | null | undefined) => {
      onChangeText(text);
      if (validation && typeof text === 'string') { // Only validate if text is a string
        const validationError = validation(text);
        setError(validationError || "");
        if (validationError) animateError();
      }
    }, throttleTime),
    [onChangeText, validation, setError, animateError, throttleTime]
  );

  const toggleSecureEntry = useCallback(() => {
    const currentSecureEntry = getSecureEntry();
    setSecureEntry(!currentSecureEntry);
  }, [setSecureEntry, getSecureEntry]);

  return {
    handleFocus,
    handleBlur,
    handleChangeText,
    toggleSecureEntry,
  };
};
