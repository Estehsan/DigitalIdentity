import { StyleSheet, Text, View } from "react-native";
import React from "react";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";

const AdminHistoryList = ({ title, date, time }) => {
  return (
    <View style={styles.ListBox}>
      <H2>{title}</H2>
      <H3>Date : {date}</H3>
      <H3>Time : {time}</H3>
    </View>
  );
};

export default AdminHistoryList;

const styles = StyleSheet.create({
  ListBox: {
    paddingHorizontal: 30,
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
    paddingVertical: 30,
  },
});
