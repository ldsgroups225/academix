import padding from "@styles/padding";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    message: {
      fontSize: 18,
      marginVertical: padding.medium,
      textAlign: "center",
    },
    retryButton: {
      backgroundColor: "#f27a1a",
      paddingVertical: padding.small,
      paddingHorizontal: padding.medium,
      borderRadius: 5,
      marginTop: padding.medium,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  