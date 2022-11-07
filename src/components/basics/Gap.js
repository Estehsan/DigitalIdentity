import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Gap = () => {
  return <View style={styles.gap} />;
};

export default Gap;

const styles = StyleSheet.create({
  gap: {
    paddingVertical: 5,
  },
});
