import { globalColorStyles } from "@/constants/globalColorStyles";
import { globalStyles } from "@/constants/globalStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { HeaderProps } from "@/constants/types";
import { useMemo } from "react";
import { Text, View } from "react-native";
import Avatar from "../avatar";

const Header = ({ greeting, name, image }: HeaderProps) => {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);

  return (
    <View
      style={[
        globalStyles.flex1,
        globalStyles.row,
        globalStyles.justifyBetween,
        globalStyles.wFull,
        globalStyles.itemsCenter,
      ]}
    >
      <View style={[globalStyles.column]}>
        <Text
          style={[
            globalStyles.textXl,
            globalStyles.fontSemibold,
            colorStyles.textBlack,
          ]}
        >
          {greeting}, {name}
        </Text>
        <Text style={[globalStyles.textSm, colorStyles.textLightGray]}>
          Find your perfect student home
        </Text>
      </View>
      <View>
        <Avatar fallBackName={name} />
      </View>
    </View>
  );
};

export default Header;
