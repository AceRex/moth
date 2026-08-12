// constants/globalColorStyles.ts
import { StyleSheet } from "react-native";
import { ThemeStyles } from "./themeStyles";

export function globalColorStyles(colors: typeof ThemeStyles.light) {
  return StyleSheet.create({
    // texts
    textPrimary: { color: colors.textPrimary },
    textBlack: { color: colors.textBlack },
    textWhite: { color: colors.textWhite },
    textGray: { color: colors.textGray },
    textLightGray: { color: colors.textLightGray },
    textGreen: { color: colors.textGreen },
    textRed: { color: colors.textRed },
    textOrange: { color: colors.textOrange },
    // backgrounds
    bgWhite: { backgroundColor: colors.bgWhite },
    bgAccent: { backgroundColor: colors.bgAccent },
    bgPrimary: { backgroundColor: colors.bgPrimary },
    bgLightPrimary: { backgroundColor: colors.bgLightPrimary },
    bgGreen: { backgroundColor: colors.bgGreen },
    bgLightGreen: { backgroundColor: colors.bgLightGreen },
    bgRed: { backgroundColor: colors.bgRed },
    bgLightRed: { backgroundColor: colors.bgLightRed },
    bgOrange: { backgroundColor: colors.bgOrange },
    bgLightOrange: { backgroundColor: colors.bgLightOrange },
    // borders
    borderPrimary: { borderColor: colors.borderPrimary },
    borderGreen: { borderColor: colors.borderGreen },
    borderRed: { borderColor: colors.borderRed },
    borderOrange: { borderColor: colors.borderOrange },
    borderLightGray: { borderColor: colors.borderLightGray },
  });
}
