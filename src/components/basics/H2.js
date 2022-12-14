import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H2 = ({ children, color, textAlign }) => {
  return (
    <Text
      style={[
        styles.H2,
        {
          color: color ? color : "#000",
          textAlign: textAlign ? textAlign : "left",
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
    fontFamily: "RedHatDisplay-SemiBold",
    color: "#000",
  },
});
