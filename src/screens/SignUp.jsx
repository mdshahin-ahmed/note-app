import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";

const genderOption = ["Male", "Female"];
export default function SignUp({ navigation }) {
  const [gender, setGender] = useState(null);
  return (
    <SafeAreaView style={{ paddingHorizontal: 16, flex: 1 }}>
      <View style={{ marginTop: 25 }}>
        <Input placeholder="Email address" style={styles.input}></Input>
        <Input placeholder="Password" secureTextEntry></Input>
        <Input placeholder="Full name"></Input>
        <Input placeholder="Age"></Input>

        <View style={{ marginVertical: 20 }}>
          <Text>Select gender</Text>
        </View>

        {genderOption.map((option) => {
          const selected = option === gender;
          return (
            <Pressable
              onPress={() => setGender(option)}
              key={option}
              style={styles.radioContainer}
            >
              <View
                style={[
                  styles.outerCircle,
                  selected && styles.selectedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    selected && styles.selectedInnerCircle,
                  ]}
                ></View>
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          );
        })}

        {/* <Pressable style={styles.radioContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}></View>
          </View>
          <Text style={styles.radioText}>Male</Text>
        </Pressable> */}

        {/* <Pressable style={styles.radioContainer}>
          <View
            style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
          >
            <View
              style={[
                styles.innerCircle,
                selected && styles.selectedInnerCircle,
              ]}
            ></View>
          </View>
          <Text style={styles.radioText}>Female</Text>
        </Pressable> */}
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

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioText: {
    marginLeft: 10,
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: "#cfcfcf",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderColor: "#cfcfcf",
    borderWidth: 1,
  },
  selectedOuterCircle: {
    borderColor: "orange",
  },
  selectedInnerCircle: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
