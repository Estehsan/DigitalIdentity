import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BackgroundOnboard = ({ children }) => {
  return <View style={styles.main}>{children}</View>;
};

export default BackgroundOnboard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#3937B9",
  },
});
