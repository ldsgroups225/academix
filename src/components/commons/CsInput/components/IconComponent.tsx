import React from "react";
import { Feather } from "@expo/vector-icons";
import useTheme from "@hooks/useTheme";
import useThemedStyles from "@hooks/useThemedStyles";
import { createStyles } from "../style";
import CsIconButton from "@components/commons/CsIconButton";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface IconComponentProps {
  secureTextEntry: boolean;
  toggleSecureEntry: () => void;
  icon?: string;
  onIconPress?: () => void;
}

const IconComponent: React.FC<IconComponentProps> = ({
  secureTextEntry,
  toggleSecureEntry,
  icon,
  onIconPress,
}) => {
  const theme = useTheme();
  const themedStyles = useThemedStyles(createStyles);

  const renderIcon = (iconName: FeatherIconName) => (
    <CsIconButton
      onPress={() => (secureTextEntry ? toggleSecureEntry : onIconPress)}
      size="md"
      icon={<Feather name={iconName} size={24} color={theme.mutedForeground} />}
      color={theme.secondary}
      style={themedStyles.icon}
    />
  );

  if (secureTextEntry) {
    return renderIcon(secureTextEntry ? "eye-off" : "eye");
  }

  if (icon && isValidFeatherIcon(icon)) {
    return renderIcon(icon);
  }

  return null;
};

function isValidFeatherIcon(iconName: string): iconName is FeatherIconName {
  return Object.keys(Feather.glyphMap).includes(iconName);
}

export default IconComponent;
