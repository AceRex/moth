import React, { createContext, useContext, useMemo, useState } from "react";
import { Appearance } from "react-native";
import { ThemeStyles } from "./themeStyles";

type Theme = "light" | "dark";

export const ThemeContext = createContext({
  theme: "light" as Theme,
  setTheme: (theme: Theme) => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = Appearance.getColorScheme();
  const initialTheme: Theme = colorScheme === "dark" ? "dark" : "light";
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export function getThemeColors(theme: Theme) {
  return ThemeStyles[theme];
}
