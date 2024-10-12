import { useEffect, useRef, useState, FC } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import CsText from "@components/commons/CsText";
import CsInput from "@components/commons/CsInput";
import CsButton from "@components/commons/CsButton";
import useTheme from "@hooks/useTheme";
import { validateEmail, validatePassword } from "@utils/Validation";
import GoogleSignInButton from "@modules/app/components/GoogleSignInButton";

const LoginScreen: FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    // Implement login logic
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
  };

  const handleCreateAccount = () => {
    // Navigate to create account screen
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <View style={styles.logoContainer}>
            <Feather name="book-open" size={60} color={theme.primary} />
            <CsText
              variant="headline"
              size="large"
              color="primary"
              style={styles.title}
            >
              Academix
            </CsText>
          </View>

          <View style={styles.formContainer}>
            <CsInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              icon="mail"
              autoCapitalize="none"
              validation={validateEmail}
            />

            <CsInput
              label="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon="lock"
              validation={validatePassword}
            />

            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotPassword}
            >
              <CsText
                variant="body"
                size="small"
                color="secondary"
                style={styles.forgotPasswordText}
              >
                Mot de passe oublié ?
              </CsText>
            </TouchableOpacity>

            <CsButton
              onPress={handleLogin}
              variant="primary"
              size="lg"
              style={styles.loginButton}
            >
              Se connecter
            </CsButton>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <CsText
                variant="body"
                size="small"
                color="secondary"
                style={styles.dividerText}
              >
                ou
              </CsText>
              <View style={styles.dividerLine} />
            </View>

            <GoogleSignInButton
              style={styles.googleButton}
              onPress={() => console.log("Google sign in")}
            />

            <View style={styles.createAccountContainer}>
              <CsText variant="body" size="small" color="secondary">
                Nouveau sur Academix ?
              </CsText>
              <TouchableOpacity onPress={handleCreateAccount}>
                <CsText
                  variant="body"
                  size="small"
                  color="primary"
                  style={styles.createAccountText}
                >
                  Créer un compte
                </CsText>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    padding: 30,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    marginTop: 10,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
  },
  loginButton: {
    marginBottom: 20,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  dividerText: {
    marginHorizontal: 10,
  },
  googleButton: {
    marginBottom: 20,
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountText: {
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
