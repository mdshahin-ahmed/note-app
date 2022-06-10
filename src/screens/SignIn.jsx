import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 16, flex: 1 }}>
      <Image
        source={require("../../assets/empty-state.jpg")}
        style={{ alignSelf: "center", width: "90%" }}
      />
      <Text style={{ fontSize: 18, fortWeight: "bold", textAlign: "center" }}>
        Never Forgot your notes
      </Text>
      <View style={{ marginTop: 25 }}>
        <Input placeholder="Email address"></Input>
        <Input placeholder="Password" secureTextEntry></Input>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 40,
          alignItems: "center",
        }}
      >
        <Button
          title="Login"
          customStyles={{ alignSelf: "center", marginBottom: 20 }}
        ></Button>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>
            Don't have an account?{" "}
            <Text style={{ color: "green", fontWeight: "bold" }}>Sing up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

// 32 m
