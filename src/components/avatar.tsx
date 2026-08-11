import { globalColorStyles } from "@/constants/globalColorStyles";
import { globalStyles } from "@/constants/globalStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { AvatarProps } from "@/constants/types";
import { useMemo } from "react";
import { Text, View } from "react-native";

const Avatar = ({ image }: AvatarProps) => {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);

  if (!image) {
    return (
      <View
        style={[
          globalStyles.w40,
          globalStyles.h40,
          globalStyles.roundedFull,
          globalStyles.border2,
          // colorStyles.borderPrimary,
        ]}
      >
        <Text>hi</Text>
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
