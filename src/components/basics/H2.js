import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H2 = ({ children, color }) => {
  return (
    <Text
      style={[
        styles.H2,
        {
          color: color ? color : "#000",
        },
      ]}>
      {children}
    </Text>
  );
};

export default H2;

const styles = StyleSheet.create({
  H2: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "RedHatDisplay_SemiBold",
    color: "#000",
  },
});
