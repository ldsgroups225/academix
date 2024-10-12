import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface CsInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  validation?: (value: string) => string | undefined;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  throttleTime?: number;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  onSubmitEditing?: () => void;
  secureTextEntry?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  onIconPress?: () => void;
  maxLength?: number;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface CsInputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
}
