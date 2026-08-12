import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedTab({
  isFocused,
  iconName,
  label,
  onPress,
}: {
  isFocused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const progress = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isFocused ? 1 : 0, { duration: 200 });
  }, [isFocused]);

  const containerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ["transparent", "#fff"],
    ),
  }));

  const labelStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Animated.View style={[styles.tab, containerStyle]}>
        <Ionicons
          name={iconName}
          size={18}
          color={isFocused ? colors.textPrimary : colors.textLightPrimary}
        />
        {/* <Animated.Text
          style={[
            styles.label,
            globalStyles.textSm,
            globalStyles.fontSemibold,
            globalStyles.ml6,
            labelStyle,
            { color: colors.textPrimary },
          ]}
          numberOfLines={1}
        >
          {label}
        </Animated.Text> */}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  label: {
    color: "#fff",
  },
});
