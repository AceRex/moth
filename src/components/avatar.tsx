import { globalColorStyles } from "@/constants/globalColorStyles";
import { globalStyles } from "@/constants/globalStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import { AvatarProps } from "@/constants/types";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Avatar = ({ image, fallBackName }: AvatarProps) => {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);
  const userInitial = useMemo(
    () => (fallBackName || "User").charAt(0).toUpperCase(),
    [fallBackName],
  );
  const router = useRouter();

  if (!image) {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push("/profile");
        }}
      >
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
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/profile");
      }}
    >
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
          globalStyles.overflowHidden,
        ]}
      >
        <Image
          source={{ uri: image }}
          style={[globalStyles.wFull, globalStyles.hFull]}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Avatar;
