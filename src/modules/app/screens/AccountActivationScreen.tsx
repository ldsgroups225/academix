import React, { useMemo, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CsText from "@components/commons/CsText";
import CsInput from "@components/commons/CsInput";
import CsButton from "@components/commons/CsButton";
import useTheme from "@hooks/useTheme";
import { validateSmsCode } from "@utils/Validation";

const AccountActivationScreen: React.FC = () => {
  // const navigation = useNavigation();
  // const route = useRoute();
  const theme = useTheme();
  const [smsCode, setSmsCode] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  // const { phoneOrEmail } = route.params;

  const handleVerifyCode = () => {
    // Implement SMS code verification logic
  };

  const handleEnable2FA = () => {
    // Implement 2FA setup logic
    setIs2FAEnabled(true);
  };

  const handleFinishActivation = () => {
    // Navigate to the main app
    // navigation.navigate('MainApp');
  };

  // Dynamic styles that depend on the theme
  const dynamicStyles = useMemo(
    () => ({
      enable2FAButton: {
        marginBottom: 10,
        borderColor: theme.border,
      } as ViewStyle,
    }),
    [theme]
  );

  return (
    <LinearGradient
      colors={[theme.background, theme.primary]}
      style={styles.container}
    >
      <View style={styles.content}>
        <CsText
          variant="headline"
          size="large"
          color="primary"
          style={styles.title}
        >
          Activation du compte
        </CsText>

        <CsText
          variant="body"
          size="medium"
          color="foreground"
          style={styles.description}
        >
          Veuillez entrer le code reçu par SMS au (phoneOrEmail)
        </CsText>

        <CsInput
          label="Code SMS"
          value={smsCode}
          onChangeText={setSmsCode}
          keyboardType="numeric"
          icon="hash"
          validation={validateSmsCode}
        />

        <CsButton
          onPress={handleVerifyCode}
          variant="primary"
          size="lg"
          style={styles.verifyButton}
        >
          Vérifier le code
        </CsButton>

        {!is2FAEnabled && (
          <CsButton
            onPress={handleEnable2FA}
            variant="outline"
            size="md"
            style={dynamicStyles.enable2FAButton}
          >
            Activer l'authentification à deux facteurs
          </CsButton>
        )}

        <CsButton
          onPress={handleFinishActivation}
          variant="primary"
          size="lg"
          style={styles.finishButton}
        >
          Terminer l'activation
        </CsButton>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  verifyButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  finishButton: {
    marginTop: 10,
  },
});

export default AccountActivationScreen;
