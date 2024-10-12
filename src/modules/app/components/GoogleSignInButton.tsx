import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CsText from "@components/commons/CsText";
import useTheme from "@hooks/useTheme";

interface GoogleSignInButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onPress,
  style,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.card }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="google" size={24} color="#DB4437" style={styles.icon} />
      <CsText
        variant="body"
        size="medium"
        color="foreground"
        style={styles.text}
      >
        Se connecter avec Google
      </CsText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontWeight: "600",
  },
});

export default GoogleSignInButton;
