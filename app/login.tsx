import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#08050D"
      />

      {/* BACKGROUND */}
      <LinearGradient
        colors={[
          "#C8B8C9",
          "#A58DB9",
          "#76549F",
          "#482675",
          "#28124C",
          "#130923",
          "#08050D",
        ]}
        locations={[
          0,
          0.12,
          0.25,
          0.40,
          0.58,
          0.80,
          1,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* BOTTOM PURPLE GLOW */}
      <LinearGradient
        colors={[
          "rgba(70, 25, 150, 0)",
          "rgba(90, 40, 190, 0.15)",
          "rgba(130, 75, 230, 0.35)",
          "rgba(210, 190, 220, 0.60)",
        ]}
        locations={[0, 0.35, 0.70, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomGlow}
      />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          {/* LOGIN CARD */}

          <View style={styles.card}>

            <Text style={styles.signIn}>
              Sign In
            </Text>

            {/* NAME */}

            <Text style={styles.label}>
              Name:
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#9D91AE"
              autoCapitalize="words"
            />

            {/* EMAIL */}

            <Text style={styles.label}>
              Email:
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#9D91AE"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* PASSWORD */}

            <Text style={styles.label}>
              Password:
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#9D91AE"
              secureTextEntry
            />

            {/* SIGN IN BUTTON */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => {
                // Nanti kita sambungkan ke Dashboard
                console.log("Sign In");
              }}
            >
              <Text style={styles.buttonText}>
                Sign In
              </Text>
            </TouchableOpacity>

          </View>

          {/* BACK */}

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>
              ← Back
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({

  // ==============================
  // CONTAINER
  // ==============================

  container: {
    flex: 1,
    backgroundColor: "#08050D",
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,

    justifyContent: "center",

    paddingHorizontal: 16,
    paddingVertical: 40,
  },

  // ==============================
  // BOTTOM GLOW
  // ==============================

  bottomGlow: {
    position: "absolute",

    bottom: 0,
    left: 0,
    right: 0,

    height: "45%",

    opacity: 0.85,
  },

  // ==============================
  // LOGIN CARD
  // ==============================

  card: {
    width: "100%",

    paddingHorizontal: 20,
    paddingVertical: 24,

    borderRadius: 20,

    backgroundColor: "rgba(28, 13, 55, 0.72)",

    borderWidth: 1,

    borderColor: "rgba(205, 184, 235, 0.35)",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.35,

    shadowRadius: 20,

    elevation: 8,
  },

  // ==============================
  // TITLE
  // ==============================

  signIn: {
    color: "#FFFFFF",

    fontSize: 17,

    fontWeight: "500",

    textAlign: "center",

    marginBottom: 24,
  },

  // ==============================
  // LABEL
  // ==============================

  label: {
    color: "#FFFFFF",

    fontSize: 9,

    marginBottom: 6,

    fontWeight: "400",
  },

  // ==============================
  // INPUT
  // ==============================

  input: {
    height: 40,

    width: "100%",

    borderRadius: 8,

    borderWidth: 1,

    borderColor: "rgba(148, 112, 207, 0.65)",

    backgroundColor: "rgba(63, 35, 125, 0.42)",

    color: "#FFFFFF",

    fontSize: 11,

    paddingHorizontal: 12,

    marginBottom: 15,
  },

  // ==============================
  // BUTTON
  // ==============================

  button: {
    height: 42,

    width: "100%",

    marginTop: 8,

    borderRadius: 22,

    backgroundColor: "#7140E8",

    borderWidth: 1,

    borderColor: "rgba(220, 205, 255, 0.45)",

    alignItems: "center",

    justifyContent: "center",

    shadowColor: "#8A5AFF",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.4,

    shadowRadius: 12,

    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",

    fontSize: 10,

    fontWeight: "600",
  },

  // ==============================
  // BACK BUTTON
  // ==============================

  backButton: {
    alignSelf: "center",

    marginTop: 20,

    padding: 8,
  },

  backText: {
    color: "#C8B8D8",

    fontSize: 11,
  },
});