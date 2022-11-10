import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H3 = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "RedHatDisplay-Light",
        fontSize: 15,
        color: color ? color : "black",
      }}>
      {children}
    </Text>
  );
};

export default H3;

const styles = StyleSheet.create({});
