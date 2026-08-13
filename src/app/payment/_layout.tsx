import { ThemeProvider } from "@/constants/themeProvider";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="payRent" />
      </Stack>
    </ThemeProvider>
  );
}
