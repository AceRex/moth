import { useColors } from "@/constants/colors";
import { globalStyles } from "@/constants/globalStyles";
import { HeaderProps } from "@/constants/types";
import React from "react";
import { Text, View } from "react-native";
import Avatar from "../avatar";
import SearchInput from "../searchInput";

const Header = ({ greeting, name, image }: HeaderProps) => {
  const colors = useColors();
  return (
    <View
      style={[globalStyles.wFull, globalStyles.column, globalStyles.spaceY12]}
    >
      <View
        style={[
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
              colors.textBlack,
            ]}
          >
            {greeting}, {name}
          </Text>
          <Text style={[globalStyles.textSm, colors.textLightGray]}>
            Find your perfect student home
          </Text>
        </View>
        <View>
          <Avatar fallBackName={name} image="https://i.pravatar.cc/150?img=7" />
        </View>
      </View>
      <SearchInput />
    </View>
  );
};

export default Header;
