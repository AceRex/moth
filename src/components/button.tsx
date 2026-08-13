import { useColors } from "@/constants/colors";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
  variant?:
    | "primary"
    | "white"
    | "secondary"
    | "link"
    | "white-light"
    | "default";
}

const Button = ({ onPress, title, variant }: Props) => {
  const color = useColors();

  if (variant === "primary") {
    return (
      <TouchableOpacity
        style={{
          ...globalStyles.p12,
          ...globalStyles.rounded12,
          ...color.bgPrimary,
          ...globalStyles.h40,
        }}
        onPress={onPress}
      >
        <Text style={{ ...color.textWhite }}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (variant === "white") {
    return (
      <TouchableOpacity
        style={{
          ...globalStyles.p12,
          ...globalStyles.rounded12,
          backgroundColor: "#ffffff",
          ...globalStyles.h40,
        }}
        onPress={onPress}
      >
        <Text style={{ ...color.textPrimary }}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (variant === "white-light") {
    return (
      <TouchableOpacity
        style={{
          ...globalStyles.p8,
          ...globalStyles.rounded10,
          backgroundColor: "#4A29C7",
          ...globalStyles.h30,
        }}
        onPress={onPress}
      >
        <Text style={{ color: "#ffffff", fontSize: 12 }}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
