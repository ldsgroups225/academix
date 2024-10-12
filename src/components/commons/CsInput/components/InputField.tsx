import React, { forwardRef } from "react";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import useTheme from "@hooks/useTheme";
import useThemedStyles from "@hooks/useThemedStyles";
import { createStyles } from "../style";
import IconComponent from "./IconComponent";

interface InputFieldProps extends React.ComponentProps<typeof TextInput> {
  secureTextEntry: boolean;
  toggleSecureEntry: () => void;
  icon?: string;
  iconPosition?: "left" | "right";
  onIconPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      secureTextEntry,
      toggleSecureEntry,
      icon,
      iconPosition,
      onIconPress,
      style,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const themedStyles = useThemedStyles(createStyles);

    const inputStyle = [
      style,
      icon &&
        (iconPosition === "right"
          ? themedStyles.inputWithRightIcon
          : themedStyles.inputWithLeftIcon),
    ];

    return (
      <View style={themedStyles.inputContainer}>
        {iconPosition === "left" && (
          <IconComponent
            secureTextEntry={secureTextEntry}
            toggleSecureEntry={toggleSecureEntry}
            icon={icon}
            onIconPress={onIconPress}
          />
        )}
        <TextInput
          ref={ref}
          style={inputStyle}
          placeholderTextColor={theme.mutedForeground}
          {...props}
        />
        {iconPosition === "right" && (
          <IconComponent
            secureTextEntry={secureTextEntry}
            toggleSecureEntry={toggleSecureEntry}
            icon={icon}
            onIconPress={onIconPress}
          />
        )}
      </View>
    );
  }
);

export default InputField;
