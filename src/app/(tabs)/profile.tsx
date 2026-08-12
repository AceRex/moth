import Container from "@/constants/container";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const router = useRouter();
  return (
    <Container>
      <View>
        <Text>profile</Text>
      </View>
    </Container>
  );
};

export default Profile;
