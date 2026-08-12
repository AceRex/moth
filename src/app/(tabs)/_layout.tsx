import AnimatedTab from "@/components/animatedTab";
import { ThemeProvider, useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  home: "home-outline",
  search: "search-outline",
  bookings: "heart-outline",
  wallet: "wallet-outline",
  profile: "person-outline",
};

type TabBarProps =
  NonNullable<ComponentProps<typeof Tabs>["tabBar"]> extends (
    props: infer P,
  ) => any
    ? P
    : never;

function CustomTabBar({ state, descriptors, navigation }: TabBarProps) {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom || 16 }]}>
      <View style={[styles.bar, { backgroundColor: colors.bgPrimary }]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label = options.title ?? route.name;
          const iconName = ICONS[route.name] ?? "ellipse-outline";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <AnimatedTab
              key={route.key}
              isFocused={isFocused}
              iconName={iconName}
              label={label}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Tabs
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tabs.Screen name="home" options={{ title: "Home" }} />
          <Tabs.Screen name="search" options={{ title: "Search" }} />
          <Tabs.Screen name="bookings" options={{ title: "Bookings" }} />
          <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
          <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: "#4b29c796",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.09,
    shadowRadius: 12,
    elevation: 6,
  },
});
