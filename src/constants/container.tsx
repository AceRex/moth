import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColorStyles } from "./globalColorStyles";
import { globalStyles } from "./globalStyles";
import { useTheme } from "./themeProvider";
import { ThemeStyles } from "./themeStyles";
import { ContainerProps } from "./types";

export default function Container({ children, style }: ContainerProps) {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);

  return (
    <SafeAreaView
      style={[
        globalStyles.px14,
        globalStyles.py14,
        globalStyles.flex1,
        colorStyles.bgAccent,
        { ...style },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
