import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CsText from "@components/commons/CsText";
import CsInput from "@components/commons/CsInput";
import CsButton from "@components/commons/CsButton";
import useTheme from "@hooks/useTheme";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
  validateSchoolLevel,
} from "@utils/Validation";

const CreateAccountScreen: React.FC = () => {
  // const navigation = useNavigation();
  const theme = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolLevel, setSchoolLevel] = useState("");
  const [isUsingPhone, setIsUsingPhone] = useState(true);

  const handleCreateAccount = () => {
    // Implement account creation logic
    // If successful, navigate to AccountActivationScreen
    // navigation.navigate("AccountActivation", { phoneOrEmail });
  };

  return (
    <LinearGradient
      colors={[theme.background, theme.primary]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <CsText
          variant="headline"
          size="large"
          color="primary"
          style={styles.title}
        >
          Créer un compte
        </CsText>

        <CsInput
          label="Prénom"
          value={firstName}
          onChangeText={setFirstName}
          icon="user"
          validation={validateName}
        />

        <CsInput
          label="Nom"
          value={lastName}
          onChangeText={setLastName}
          icon="user"
          validation={validateName}
        />

        <CsInput
          label={isUsingPhone ? "Numéro de téléphone" : "Email"}
          value={phoneOrEmail}
          onChangeText={setPhoneOrEmail}
          keyboardType={isUsingPhone ? "phone-pad" : "email-address"}
          icon={isUsingPhone ? "phone" : "mail"}
          validation={isUsingPhone ? validatePhoneNumber : validateEmail}
        />

        <CsInput
          label="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon="lock"
          validation={validatePassword}
        />

        <CsInput
          label="Niveau scolaire"
          value={schoolLevel}
          onChangeText={setSchoolLevel}
          icon="book"
          validation={validateSchoolLevel}
        />

        <CsButton
          onPress={handleCreateAccount}
          variant="primary"
          size="lg"
          style={styles.createAccountButton}
        >
          Créer le compte
        </CsButton>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  createAccountButton: {
    marginTop: 20,
  },
});

export default CreateAccountScreen;
