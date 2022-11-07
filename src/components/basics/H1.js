import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H1 = ({ children, color, fontSize }) => {
  return (
    <Text
      style={[
        styles.H1,
        {
          color: color ? color : "#000",
          fontSize: fontSize ? fontSize : 30,
          // 22
        },
      ]}>
      {children}
    </Text>
  );
};

export default H1;

const styles = StyleSheet.create({
  H1: {
    fontWeight: "bold",
    fontFamily: "RedHatDisplay_SemiBold",
    color: "#000",
  },
});
