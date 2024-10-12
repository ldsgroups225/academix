import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View } from "react-native";
import translate from "@helpers/localization";
import { showToast } from "@helpers/toast/showToast";
import CsText from "@components/commons/CsText";
import CsButton from "@components/commons/CsButton";
import { Feather, FontAwesome } from "@expo/vector-icons";
import CsIconButton from "@components/commons/CsIconButton";
import useTheme from "@hooks/useTheme";
import CsInput from "@components/commons/CsInput";
import LoginScreen from "@modules/app/screens/LoginScreen";

function Home() {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : "Invalid email address";
  };

  const validatePassword = (value: string) => {
    return value.length >= 8
      ? undefined
      : "Password must be at least 8 characters";
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(value) ? undefined : "Invalid phone number";
  };

  const styles = StyleSheet.create({
    safeView: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 20,
    },
    section: {
      marginBottom: 30,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: 10,
    },
    inputSection: {
      marginBottom: 20,
    },
  });

  return <LoginScreen />;

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.section}>
            <CsText
              variant="headline"
              size="large"
              color="primary"
              style={{ marginBottom: 10 }}
            >
              Welcome to Academix
            </CsText>
            <CsText variant="body" size="medium" style={{ marginBottom: 5 }}>
              Learn and grow with our interactive courses.
            </CsText>
            <CsText variant="label" size="small" color="secondary">
              Featured Course: {translate("name")}
            </CsText>
          </View>

          <View style={styles.section}>
            <CsText
              variant="title"
              size="medium"
              color="primary"
              style={{ marginBottom: 10 }}
            >
              Button Showcase
            </CsText>
            <View style={styles.row}>
              <CsButton
                onPress={() => showToast("Primary button pressed")}
                variant="primary"
                size="md"
              >
                Primary
              </CsButton>
              <CsButton
                onPress={() => showToast("Secondary button pressed")}
                variant="secondary"
                size="md"
              >
                Secondary
              </CsButton>
            </View>
            <View style={styles.row}>
              <CsButton
                onPress={() => showToast("Outline button pressed")}
                variant="outline"
                size="md"
              >
                Outline
              </CsButton>
              <CsButton
                onPress={() => showToast("Ghost button pressed")}
                variant="ghost"
                size="md"
              >
                Ghost
              </CsButton>
            </View>
            <CsButton
              onPress={() => showToast("Large button with icon pressed")}
              variant="primary"
              size="lg"
              leftIcon={<FontAwesome name="star" size={24} color="gold" />}
            >
              Large with Icon
            </CsButton>
          </View>

          <View style={styles.section}>
            <CsText
              variant="title"
              size="medium"
              color="primary"
              style={{ marginBottom: 10 }}
            >
              Icon Buttons
            </CsText>
            <View style={styles.row}>
              <CsIconButton
                onPress={() => showToast("Star icon pressed")}
                size="md"
                icon={<Feather name="star" size={24} />}
                color={theme.primary}
              />
              <CsIconButton
                onPress={() => showToast("Heart icon pressed")}
                size="md"
                icon={<Feather name="heart" size={24} />}
                color={theme.destructive}
              />
              <CsIconButton
                onPress={() => showToast("Settings icon pressed")}
                size="md"
                icon={<Feather name="settings" size={24} />}
                color={theme.secondary}
              />
            </View>
          </View>

          <View style={styles.section}>
            <CsText
              variant="title"
              size="medium"
              color="primary"
              style={{ marginBottom: 10 }}
            >
              Input Showcase
            </CsText>

            <View style={styles.inputSection}>
              <CsInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                validation={validateEmail}
                icon="mail"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputSection}>
              <CsInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                validation={validatePassword}
                icon="lock"
              />
            </View>

            <View style={styles.inputSection}>
              <CsInput
                label="Username"
                placeholder="Choose a username"
                value={username}
                onChangeText={setUsername}
                icon="user"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputSection}>
              <CsInput
                label="Phone"
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                validation={validatePhone}
                icon="phone"
              />
            </View>

            <View style={styles.inputSection}>
              <CsInput
                label="Bio"
                placeholder="Tell us about yourself"
                value={bio}
                onChangeText={setBio}
                icon="edit-2"
              />
            </View>

            <View style={styles.inputSection}>
              <CsInput
                label="Disabled Input"
                placeholder="This input is disabled"
                value="Disabled value"
                onChangeText={() => {}}
                icon="slash"
              />
            </View>

            <View style={styles.inputSection}>
              <CsInput
                label="Custom Style"
                placeholder="Input with custom style"
                value=""
                onChangeText={() => {}}
                icon="layout"
                style={{ borderColor: theme.accent, borderWidth: 2 }}
                inputStyle={{ color: theme.accent }}
                labelStyle={{ color: theme.accent }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
