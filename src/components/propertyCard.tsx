import { useColors } from "@/constants/colors";
import { globalStyles } from "@/constants/globalStyles";
import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Button from "./button";
import GradientBackdrop from "./gradientBackDrop";

const PropertyCard = ({ props }: { props: any }) => {
  const color = useColors();
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableOpacity
      style={{
        ...globalStyles.rounded16,
        ...globalStyles.p8,
        ...color.bgWhite,
        ...globalStyles.shadowBlackMD,
      }}
    >
      <View
        style={{
          ...globalStyles.w200,
          ...color.bgLightPrimary,
          ...globalStyles.h300,
          ...globalStyles.rounded10,
          ...globalStyles.overflowHidden,
        }}
      >
        <ImageBackground
          source={{ uri: props.item.image }}
          style={{
            ...globalStyles.wFull,
            ...globalStyles.hFull,
            ...globalStyles.rounded10,
          }}
        >
          <View
            style={{
              ...globalStyles.wFull,
              ...globalStyles.hFull,
              ...globalStyles.column,
              ...globalStyles.justifyBetween,
            }}
          >
            {/* top */}
            <View
              style={{
                ...globalStyles.row,
                ...globalStyles.justifyBetween,
                ...globalStyles.p8,
              }}
            >
              <View
                style={{
                  ...globalStyles.row,
                  ...globalStyles.justifyBetween,
                  ...globalStyles.wFull,
                }}
              >
                <View
                  style={{
                    ...globalStyles.row,
                    ...globalStyles.itemsCenter,
                    ...globalStyles.gap4,
                    ...globalStyles.p4,
                    ...globalStyles.rounded8,
                    ...color.bgWhiteTransparent,
                  }}
                >
                  <Octicons
                    name="star-fill"
                    size={12}
                    style={color.textOrange}
                  />
                  <Text
                    style={{ ...globalStyles.fontBold, ...globalStyles.textXs }}
                  >
                    {props.item.rating}
                  </Text>
                  <Text style={{ ...globalStyles.textXss }}>
                    {props.item.number_reviews}
                  </Text>
                </View>
                <View style={{ ...globalStyles.row, ...globalStyles.gap8 }}>
                  <TouchableOpacity
                    style={{
                      ...globalStyles.row,
                      ...globalStyles.itemsCenter,
                      ...globalStyles.justifyCenter,
                      ...globalStyles.p4,
                      ...globalStyles.roundedFull,
                      width: 25,
                      height: 25,
                      ...color.bgWhiteTransparent,
                    }}
                  >
                    <FontAwesome5
                      name="share-alt"
                      size={14}
                      style={{ ...color.textWhite }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...globalStyles.row,
                      ...globalStyles.itemsCenter,
                      ...globalStyles.justifyCenter,
                      ...globalStyles.p4,
                      ...globalStyles.roundedFull,
                      width: 25,
                      height: 25,
                      ...color.bgWhiteTransparent,
                    }}
                    onPress={() => setClicked(!clicked)}
                  >
                    {!clicked ? (
                      <Ionicons
                        name="heart-outline"
                        size={14}
                        style={{ ...color.textRed }}
                      />
                    ) : (
                      <Ionicons
                        name="heart-sharp"
                        size={14}
                        style={{ ...color.textRed }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                ...globalStyles.p4,
                ...globalStyles.rounded8,
                ...globalStyles.h200,
              }}
            >
              <GradientBackdrop intensity={7}>
                <Text
                  style={{
                    color: "#ffffff",
                    ...globalStyles.textSm,
                    ...globalStyles.fontSemibold,
                  }}
                >
                  {props.item.name}
                </Text>
                <View
                  style={{
                    ...globalStyles.row,
                    ...globalStyles.itemsCenter,
                    ...globalStyles.gap4,
                  }}
                >
                  <View
                    style={{
                      ...color.bgWhiteTransparent,
                      ...globalStyles.h10,
                      ...globalStyles.w10,
                      ...globalStyles.roundedFull,
                      ...globalStyles.itemsCenter,
                      ...globalStyles.justifyCenter,
                    }}
                  >
                    <Ionicons
                      name="location-sharp"
                      size={7}
                      style={{ color: "#ffffff" }}
                    />
                  </View>
                  <Text style={{ color: "#ffffff", ...globalStyles.textXs }}>
                    {props.item.location}
                  </Text>
                </View>
                <View
                  style={{
                    ...globalStyles.row,
                    ...globalStyles.justifyBetween,
                    ...globalStyles.mt8,
                    ...globalStyles.itemsCenter,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        ...globalStyles.textXss,
                        color: "#ffffff",
                        ...globalStyles.fontLight,
                      }}
                    >
                      Price
                    </Text>
                    <View
                      style={{
                        ...globalStyles.row,
                        ...globalStyles.itemsCenter,
                        ...globalStyles.gap2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          ...globalStyles.textLg,
                          ...globalStyles.fontBold,
                        }}
                      >
                        ₦{props.item.price}
                      </Text>
                      <Text
                        style={{
                          color: "#ffffff",
                          ...globalStyles.textSm,
                        }}
                      >
                        /year
                      </Text>
                    </View>
                  </View>
                  <Button
                    variant="white-light"
                    onPress={() => {}}
                    title="Book now"
                  />
                </View>
              </GradientBackdrop>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;
