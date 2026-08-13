import Button from "@/components/button";
import CategoryBtn from "@/components/homePage/categoryBtn";
import Header from "@/components/homePage/header";
import PropertyCard from "@/components/propertyCard";
import QuickActionbtn from "@/components/quickActionbtn";
import search_list from "@/constants/category.json";
import { useColors } from "@/constants/colors";
import Container from "@/constants/container";
import { globalStyles } from "@/constants/globalStyles";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Icons = [
  { id: 1, icon: <FontAwesome6 name="credit-card" size={20} /> },
  { id: 2, icon: <FontAwesome6 name="cart-flatbed-suitcase" size={20} /> },
  { id: 3, icon: <FontAwesome6 name="store" size={20} /> },
  { id: 4, icon: <FontAwesome6 name="users-gear" size={20} /> },
];

export default function Home() {
  const [isSelected, setIsSelected] = useState("All");
  const color = useColors();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handlePress = ({ title }: { title: string }) => {
    setIsSelected(title);
  };

  const quickActionButton = ({ link }: { link: any }) => {
    router.push(link);
  };
  return (
    <ScrollView>
      <Container
        style={{ ...globalStyles.spaceY12, paddingBottom: insets.bottom + 25 }}
      >
        <Header greeting="Hello" name="Rex" image={undefined} />
        {/* category buttons */}
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
        {/* pay rent banner */}
        <View
          style={{
            ...globalStyles.p16,
            ...color.bgPrimary,
            ...globalStyles.rounded12,
            ...globalStyles.row,
            ...globalStyles.justifyBetween,
            ...globalStyles.itemsCenter,
            ...globalStyles.gap8,
          }}
        >
          <View style={[globalStyles.flex1, globalStyles.mr8]}>
            <Text
              style={{
                color: "#ffffff",
                ...globalStyles.fontBold,
                ...globalStyles.textXl,
              }}
            >
              Pay Rent Easily & Securely
            </Text>
            <Text
              style={{
                color: "#ffffff",
                ...globalStyles.textXs,
                ...globalStyles.pr8,
              }}
            >
              Avoid the hassle. Pay with cards, transfer or student wallet.
            </Text>
          </View>

          <Button
            variant="white"
            title="Pay Now"
            onPress={() => router.push("/payment/payRent")}
          />
        </View>
        {/* quick actions */}
        <View>
          <FlatList
            horizontal
            data={search_list.quick_actions}
            keyExtractor={(item) => item.name}
            renderItem={(item) => (
              <QuickActionbtn
                id={item.item.id}
                title={item.item.name}
                onPress={() => quickActionButton({ link: item.item.link })}
                icon={Icons.find((i) => i.id === item.item.id)?.icon}
              />
            )}
            contentContainerStyle={{
              ...globalStyles.row,
              ...globalStyles.wFull,
              ...globalStyles.justifyBetween,
            }}
          />
        </View>
        <Text
          style={{
            ...color.textBlack,
            ...globalStyles.textLg,
            ...globalStyles.fontSemibold,
            ...globalStyles.mt4,
          }}
        >
          Nearby Properties
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={search_list.properties}
            renderItem={(item) => <PropertyCard props={{ ...item }} />}
            contentContainerStyle={{
              ...globalStyles.justifyBetween,
              ...globalStyles.gap12,
            }}
          />
        </View>
      </Container>
    </ScrollView>
  );
}
