import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getNewBoard } from "./utils/boardUtil";
import Navbar from "./components/navigation";

const name = "Dr Jekll";

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.pageContainer}>
        <Text style={styles.heading}>Welcome, {name}</Text>
        <StatusBar style="auto" />
        {getNewBoard(3, 3)}
      </View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  pageContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: 42,
  },
});

export default App;
