import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./styles/global";
import { getNewBoard } from "./utils/boardUtil";

const name = "Dr Jekll";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, {name}</Text>
      <StatusBar style="auto" />
      {getNewBoard(3, 3)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: 42,
  },
});

export default App;
