import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import {
  FadeIn,
  FadeOut,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  home: "home",
  wishlist: "heart-outline",
  bag: "bag-outline",
  profile: "person-outline",
};

function AnimatedTab({
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
  const scale = useSharedValue(1);

  useEffect(() => {
    // pop: overshoot then settle
    scale.value = withSpring(1, { damping: 8, stiffness: 200 });
  }, [isFocused]);

  const handlePressIn = () => {
    scale.value = withSpring(0.88, { damping: 10, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 6, stiffness: 250 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        layout={Layout.springify().damping(14).stiffness(180)}
        style={[styles.tab, isFocused && styles.tabActive, animatedStyle]}
      >
        <Ionicons
          name={iconName}
          size={18}
          color={isFocused ? "#fff" : "#1a1a1a"}
        />
        {isFocused && (
          <Animated.Text
            entering={FadeIn.duration(150)}
            exiting={FadeOut.duration(100)}
            style={styles.label}
          >
            {label}
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 24,
  },
  tabActive: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 18,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
});
