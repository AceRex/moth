import { globalColorStyles } from "@/constants/globalColorStyles";
import { globalStyles } from "@/constants/globalStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { useMemo } from "react";
import { TextInput, View } from "react-native";
// import {
//   AntDesign,
//   EvilIcons,
//   FontAwesome,
//   FontAwesome5,
//   Feather,
//   Foundation,
//   Ionicons,
//   MaterialCommunityIcons,
//   MaterialIcons,
//   Octicons,
//   SimpleLineIcons,
//   Zocial,
// } from "@expo/vector-icons";
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
        globalStyles.rounded6,
        globalStyles.border1,
        colorStyles.borderLightGray,
        globalStyles.h40,
        globalStyles.justifyCenter,
        globalStyles.pl24,
      ]}
    >
      <TextInput
        placeholder="Search for suitable apartments..."
        placeholderTextColor={colors.textLightGray}
        style={[globalStyles.p4]}
      />
    </View>
  );
};

export default SearchInput;
