// constants/globalColorStyles.ts
import { StyleSheet } from "react-native";
import { ThemeStyles } from "./themeStyles";

export function globalColorStyles(colors: typeof ThemeStyles.light) {
  return StyleSheet.create({
    textPrimary: { color: colors.textPrimary },
    textBlack: { color: colors.textBlack },
    textWhite: { color: colors.textWhite },
    textGray: { color: colors.textGray },
    textLightGray: { color: colors.textLightGray },
    textGreen: { color: colors.textGreen },
    textRed: { color: colors.textRed },
    textOrange: { color: colors.textOrange },
    bgWhite: { backgroundColor: colors.bgWhite },
    bgAccent: { backgroundColor: colors.bgAccent },
  });
}
