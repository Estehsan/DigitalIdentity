import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import H2 from "./H2";
import H3 from "./H3";

const Btn = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      {children}
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#e9effe",
    // backgroundColor: "#FFF",

    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 50,
    // SHADOW
    shadowColor: "#3937B9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
});
