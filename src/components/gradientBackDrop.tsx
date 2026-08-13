// components/GradientBackdrop.tsx
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

const GradientBackdrop = ({
  children,
  intensity = 40,
  style,
}: {
  children?: ReactNode;
  intensity?: number; // blur strength, 0–100
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* backdrop blur sits behind the gradient */}
      <BlurView
        intensity={intensity}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView" // needed on Android
        style={StyleSheet.absoluteFill}
      />

      {/* gradient: transparent at top, dark at bottom */}
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.57)"]}
        locations={[0, 1]}
        style={StyleSheet.absoluteFill}
      />
      {/* content (e.g. title/price text) sits on top */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default GradientBackdrop;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  content: {
    padding: 12,
  },
});
