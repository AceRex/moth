import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
}

const Button = ({ onPress, title }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
