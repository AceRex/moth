import { useColors } from "@/constants/colors";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const QuickActionbtn = ({
  title,
  id,
  icon,
  onPress,
}: {
  title: string;
  id: string | number;
  icon: any;
  onPress: () => void;
}) => {
  const color = useColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...globalStyles.itemsCenter,
        ...globalStyles.justifyCenter,
        ...globalStyles.gap4,
        ...globalStyles.px8,
      }}
    >
      <View
        style={{
          ...globalStyles.w50,
          ...globalStyles.h50,
          ...(id === 1 && color.bgLightPrimary),
          ...(id === 2 && color.bgLightBlue),
          ...(id === 3 && color.bgLightGreen),
          ...(id === 4 && color.bgLightOrange),
          ...globalStyles.rounded12,
          ...globalStyles.itemsCenter,
          ...globalStyles.justifyCenter,
        }}
      >
        <Text
          style={{
            ...(id === 1 && color.textPrimary),
            ...(id === 2 && color.textBlue),
            ...(id === 3 && color.textGreen),
            ...(id === 4 && color.textOrange),
          }}
        >
          {icon}
        </Text>
      </View>
      <Text
        style={{
          ...globalStyles.textXss,
          ...globalStyles.capitalize,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default QuickActionbtn;
