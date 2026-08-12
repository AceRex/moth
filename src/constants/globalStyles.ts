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
  itemsStart: { alignItems: "flex-start" },
  itemsEnd: { alignItems: "flex-end" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },

  // Position
  absolute: { position: "absolute" },
  relative: { position: "relative" },

  // Spacing (extend as needed)
  p2: { padding: 2 },
  pr2: { paddingRight: 2 },
  pl2: { paddingLeft: 2 },
  p4: { padding: 4 },
  pr4: { paddingRight: 4 },
  pl4: { paddingLeft: 4 },
  p8: { padding: 8 },
  pr8: { paddingRight: 8 },
  pl8: { paddingLeft: 8 },
  p12: { padding: 12 },
  pr12: { paddingRight: 12 },
  pl12: { paddingLeft: 12 },
  p14: { padding: 14 },
  pr14: { paddingRight: 14 },
  pl14: { paddingLeft: 14 },
  p16: { padding: 16 },
  pr16: { paddingRight: 16 },
  pl16: { paddingLeft: 16 },
  px14: { paddingHorizontal: 14 },
  py14: { paddingVertical: 14 },
  px16: { paddingHorizontal: 16 },
  py16: { paddingVertical: 16 },
  p20: { padding: 20 },
  px20: { paddingHorizontal: 20 },
  py20: { paddingVertical: 20 },
  pr20: { paddingRight: 20 },
  pl20: { paddingLeft: 20 },
  p24: { padding: 24 },
  px24: { paddingHorizontal: 24 },
  py24: { paddingVertical: 24 },
  pr24: { paddingRight: 24 },
  pl24: { paddingLeft: 24 },
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

  // radius
  rounded4: { borderRadius: 4 },
  rounded6: { borderRadius: 6 },
  rounded8: { borderRadius: 8 },
  rounded10: { borderRadius: 10 },
  rounded12: { borderRadius: 12 },
  rounded16: { borderRadius: 16 },
  rounded24: { borderRadius: 24 },
  roundedFull: { borderRadius: "100%" },

  // border
  border1: { borderWidth: 1 },
  border2: { borderWidth: 2 },
  border4: { borderWidth: 4 },
  border6: { borderWidth: 6 },
  border8: { borderWidth: 8 },

  // cases
  capitalize: { textTransform: "capitalize" },
  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },

  overflowHidden: { overflow: "hidden" },
});
