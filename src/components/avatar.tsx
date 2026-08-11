import { globalColorStyles } from "@/constants/globalColorStyles";
import { globalStyles } from "@/constants/globalStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { AvatarProps } from "@/constants/types";
import { useMemo } from "react";
import { Text, View } from "react-native";

const Avatar = ({ image, fallBackName }: AvatarProps) => {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);
  const userInitial = useMemo(
    () => (fallBackName || "User").charAt(0).toUpperCase(),
    [fallBackName],
  );

  if (!image) {
    return (
      <View
        style={[
          globalStyles.w40,
          globalStyles.h40,
          globalStyles.roundedFull,
          globalStyles.border2,
          colorStyles.borderPrimary,
          colorStyles.bgLightPrimary,
          globalStyles.itemsCenter,
          globalStyles.justifyCenter,
        ]}
      >
        <Text
          style={[
            globalStyles.textXl,
            colorStyles.textPrimary,
            globalStyles.fontSemibold,
            globalStyles.uppercase,
          ]}
        >
          {userInitial}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[globalStyles.w40, globalStyles.h40, globalStyles.roundedFull]}
    >
      <Text>yh</Text>
    </View>
  );
};

export default Avatar;
