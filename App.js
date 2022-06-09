import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginTop: 30 }}>
        <Text>Alhamdulillah!</Text>
        <Text>I am there</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "tomato",
  },
  main: {
    backgroundColor: "orange",
    color: "white",
  },
});
