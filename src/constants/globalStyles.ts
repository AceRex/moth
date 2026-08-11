// constants/globalStyles.ts
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Sizing
  wFull: { width: "100%" },
  hFull: { height: "100%" },
  w40: { width: 40 },
  h40: { height: 40 },
  w60: { width: 60 },
  h60: { height: 60 },
  w80: { width: 80 },
  h80: { height: 80 },

  // Flex
  flex1: { flex: 1 },
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
  itemsCenter: { alignItems: "center" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },
  center: { alignItems: "center", justifyContent: "center" },

  // Position
  absolute: { position: "absolute" },
  relative: { position: "relative" },

  // Spacing (extend as needed)
  p4: { padding: 4 },
  p8: { padding: 8 },
  p12: { padding: 12 },
  p14: { padding: 14 },
  p16: { padding: 16 },
  px14: { paddingHorizontal: 14 },
  py14: { paddingVertical: 14 },
  px16: { paddingHorizontal: 16 },
  py16: { paddingVertical: 16 },
  m4: { margin: 4 },
  m8: { margin: 8 },
  m16: { margin: 16 },

  // Text
  textCenter: { textAlign: "center" },
  fontBold: { fontWeight: "700" },
  fontSemibold: { fontWeight: "600" },
  fontMedium: { fontWeight: "500" },
  textXl: { fontSize: 24 },
  textLg: { fontSize: 18 },
  textSm: { fontSize: 14 },
  textXs: { fontSize: 12 },

  roundedFull: { borderRadius: "100%" },

  // border
  border1: { borderWidth: 1 },
  border2: { borderWidth: 2 },
  border4: { borderWidth: 4 },
  border6: { borderWidth: 6 },
  border8: { borderWidth: 8 },
});
