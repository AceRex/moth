import Button from "@/components/button";
import CategoryBtn from "@/components/homePage/categoryBtn";
import Header from "@/components/homePage/header";
import search_list from "@/constants/category.json";
import { useColors } from "@/constants/colors";
import Container from "@/constants/container";
import { globalStyles } from "@/constants/globalStyles";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Home() {
  const [isSelected, setIsSelected] = useState("All");
  const color = useColors();

  const handlePress = ({ title }: { title: string }) => {
    setIsSelected(title);
  };
  return (
    <Container style={{ ...globalStyles.spaceY8 }}>
      <Header greeting="Hello" name="Rex" image={undefined} />
      <View>
        <FlatList
          horizontal
          data={search_list.search_list}
          renderItem={(item) => (
            <CategoryBtn
              title={item.item.name}
              onPress={() => handlePress({ title: item.item.name })}
              isActive={isSelected === item.item.name}
            />
          )}
          contentContainerStyle={{
            ...globalStyles.row,
            ...globalStyles.wFull,
            ...globalStyles.justifyBetween,
          }}
        />
      </View>
      <View
        style={{
          ...globalStyles.p16,
          ...globalStyles.h100,
          ...color.bgPrimary,
          ...globalStyles.rounded12,
          ...globalStyles.row,
        }}
      >
        <View>
          <Text
            style={{
              ...color.textWhite,
              ...globalStyles.fontSemibold,
              ...globalStyles.textXl,
            }}
          >
            Pay Rent Easily & Securely
          </Text>
          <Text
            style={{
              ...color.textWhite,
              ...globalStyles.textSm,
            }}
          >
            Avoid the hassle. Pay with cards, transfer or student wallet.
          </Text>
        </View>
        <View>
          <Button title="Pay Now" onPress={() => {}} />
        </View>
      </View>
    </Container>
  );
}
