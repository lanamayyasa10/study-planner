import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B0712"
      />

      {/* BACKGROUND */}
      <LinearGradient
        colors={[
          "#C8B8C9",
          "#A58DB9",
          "#76549F",
          "#4A2778",
          "#2B1450",
          "#160B2B",
          "#0B0712",
        ]}
        locations={[
          0,
          0.12,
          0.25,
          0.40,
          0.58,
          0.78,
          1,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />

      {/* CONTENT */}
      <View style={styles.content}>

        <View style={styles.textContainer}>

          <Text style={styles.title}>
            Turn every{" "}
            <Text style={styles.study}>study</Text>
          </Text>

          <Text style={styles.title}>
          <Text style={styles.study}>session</Text> into
          </Text>

          <Text style={styles.title}>
            meaningful progress
          </Text>

          <Text style={styles.description}>
            A thoughtful way to organize your time,
            stay focused, and make progress that lasts.
          </Text>

        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
            onPress={() => router.push("/login")}
>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0712",
  },

  /*
   * SATU GRADIENT UNTUK SELURUH LAYAR
   * Tidak ada layer gradient kedua,
   * sehingga tidak ada garis hitam.
   */
  background: {
    ...StyleSheet.absoluteFillObject,
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",

    paddingHorizontal: 16,
    paddingBottom: 42,
  },

  textContainer: {
    marginBottom: 30,
  },

  title: {
    color: "#FFFFFF",

    fontSize: 25,
    lineHeight: 28,

    fontWeight: "500",

    letterSpacing: -0.7,
  },

  study: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontWeight: "400",
  },

  description: {
    color: "#BDB5C5",

    fontSize: 9,
    lineHeight: 13,

    marginTop: 13,

    maxWidth: 290,
  },

  button: {
    height: 46,
    width: "100%",

    borderRadius: 25,

    backgroundColor: "rgba(55, 25, 110, 0.70)",

    borderWidth: 1,
    borderColor: "rgba(220, 205, 235, 0.60)",

    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",

    fontSize: 9,
    fontWeight: "600",
  },
});