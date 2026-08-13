import { useColors } from "@/constants/colors";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CategoryBtn = ({
  title,
  icon,
  isActive,
  onPress,
}: {
  title: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onPress: () => void;
}) => {
  const colors = useColors();
  const ACTIVE_TEXT_COLOR = "#fff";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...globalStyles.w80,
        ...globalStyles.p8,
        ...globalStyles.border1,
        ...(isActive ? colors.bgPrimary : colors.bgWhite),
        ...globalStyles.itemsCenter,
        ...globalStyles.rounded10,
        ...colors.borderLightGray,
      }}
    >
      <View>{icon}</View>
      <Text style={isActive ? { color: ACTIVE_TEXT_COLOR } : colors.textGray}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryBtn;
