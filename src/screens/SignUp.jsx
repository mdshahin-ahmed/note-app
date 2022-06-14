import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// const app = initializeApp(firebaseConfig);

const auth = getAuth();

const genderOption = ["Male", "Female"];
export default function SignUp({ navigation }) {
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const singUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <SafeAreaView style={{ paddingHorizontal: 16, flex: 1 }}>
      <View style={{ marginTop: 25 }}>
        <Input
          placeholder="Email addresse"
          onChangeText={(text) => setEmail(text)}
        ></Input>
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        ></Input>
        <Input
          placeholder="Full name"
          onChangeText={(text) => setName(text)}
        ></Input>
        <Input placeholder="Age" onChangeText={(text) => setAge(text)}></Input>

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
          onPress={singUp}
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
