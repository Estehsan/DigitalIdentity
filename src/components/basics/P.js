import { StyleSheet, Text, View } from "react-native";
import React from "react";

const P = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "RedHatDisplay_Light",
        fontSize: 17,
        color: color ? color : "black",
      }}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({});
