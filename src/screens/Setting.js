import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Btn, H1, H2 } from "../components/basics";

const Setting = () => {
  return (
    <View style={styles.main}>
      <View style={styles.TopBar}>
        <H1 fontSize={35} color="white">
          iD
        </H1>
        <H2 color="white">Version 1.0</H2>
      </View>
      <View style={styles.Descr}>
        <Btn>General</Btn>
        <Btn>Security</Btn>
        <Btn>Wallet</Btn>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  TopBar: {
    backgroundColor: "#3937B9",
    paddingVertical: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 20,
  },
  Descr: {
    flex: 1,
    paddingHorizontal: 30,
  },
});
