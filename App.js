import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Edit from "./src/screens/Edit";
import Create from "./src/screens/Create";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHZpT18a-dootHIIG3P0CoeUpt7HTgw_w",
  authDomain: "note-app57.firebaseapp.com",
  projectId: "note-app57",
  storageBucket: "note-app57.appspot.com",
  messagingSenderId: "1096989133014",
  appId: "1:1096989133014:web:a3351bcbf1a9845f8b2177",
};

const app = initializeApp(firebaseConfig);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false; // Not Authenticated
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Create" component={Create} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "tomato",
  },
});
