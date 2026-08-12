import { useMemo } from "react";
import { globalColorStyles } from "./globalColorStyles";
import { useTheme } from "./themeProvider";
import { ThemeStyles } from "./themeStyles";

export function useColors() {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);
  return colorStyles;
}
