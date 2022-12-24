import { View, Text, Image, Button, Pressable } from "react-native";
import { StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={{ ...styles.navContainer }}>
      <Pressable style={styles.navButton}>
        <Text style={styles.navButtonText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text style={styles.navButtonText}>Play</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text style={styles.navButtonText}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#eeeeee",
    paddingBottom: 25,
    paddingTop: 15,
  },
  navButtonText: {
    fontSize: 20,
  },
});

export default Navbar;
