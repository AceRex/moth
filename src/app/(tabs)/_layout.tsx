import { ThemeProvider } from "@/constants/themeProvider";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen name="home" options={{ title: "Home" }} />
        </Tabs>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
