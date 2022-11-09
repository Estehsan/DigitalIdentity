import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

// Create a four digit pin component in React Native
const FourPin = () => {
  return (
    <View style={styles.fourPin}>
      <TextInput
        style={styles.pin}
        mode="outlined"
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        style={styles.pin}
        mode="outlined"
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        style={styles.pin}
        mode="outlined"
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        style={styles.pin}
        mode="outlined"
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};
export default FourPin;

const styles = StyleSheet.create({
  pin: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 20,
  },
  fourPin: {
    flexDirection: "row",
    paddingVertical: 20,
  },
});
