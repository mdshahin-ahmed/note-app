import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 16, flex: 1 }}>
      <View style={{ marginTop: 25 }}>
        <Input placeholder="Email address" style={styles.input}></Input>
        <Input placeholder="Password" secureTextEntry></Input>
        <Input placeholder="Full name"></Input>
        <Input placeholder="Age"></Input>
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
          title="Sign Up"
          customStyles={{ alignSelf: "center", marginBottom: 20 }}
        ></Button>
        <Pressable>
          <Text>
            Already have an account?{" "}
            <Text style={{ color: "green", fontWeight: "bold" }}>Sing In</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
