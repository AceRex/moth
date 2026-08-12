import { globalColorStyles } from "@/constants/globalColorStyles";
import { globalStyles } from "@/constants/globalStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { TextInput, View } from "react-native";

const SearchInput = () => {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);

  return (
    <View
      style={[
        globalStyles.relative,
        colorStyles.bgWhite,
        globalStyles.overflowHidden,
        globalStyles.rounded12,
        globalStyles.border1,
        colorStyles.borderLightGray,
        globalStyles.h40,
        globalStyles.row,
        globalStyles.itemsCenter,
        globalStyles.px12,
      ]}
    >
      <Ionicons name="search-outline" size={16} color={colors.textLightGray} />
      <TextInput
        placeholder="Search for suitable apartments..."
        placeholderTextColor={colors.textLightGray}
        style={[
          globalStyles.flex1,
          globalStyles.textLeft,
          globalStyles.pl8,
          colorStyles.textBlack,
        ]}
        cursorColor={colors.textPrimary}
      />
    </View>
  );
};

export default SearchInput;
