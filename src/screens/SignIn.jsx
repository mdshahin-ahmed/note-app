import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/empty-state.jpg")}
        style={{ alignSelf: "center", width: "90%" }}
      />
    </SafeAreaView>
  );
}
