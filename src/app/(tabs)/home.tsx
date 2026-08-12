import CategoryBtn from "@/components/homePage/categoryBtn";
import Header from "@/components/homePage/header";
import search_list from "@/constants/category.json";
import Container from "@/constants/container";
import { globalStyles } from "@/constants/globalStyles";
import React, { useState } from "react";
import { FlatList, View } from "react-native";

export default function Home() {
  const [isSelected, setIsSelected] = useState("All");

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
    </Container>
  );
}
