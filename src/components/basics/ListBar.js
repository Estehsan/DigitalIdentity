import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import H2 from "./H2";
import H3 from "./H3";

const ListBar = ({ title, subTitle, icon, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <View style={styles.left}>
        <Avatar.Icon color="black" size={55} icon={icon} />
      </View>

      <View>
        <H2>{title}</H2>
        <View style={styles.gap} />
        <H3>{subTitle}</H3>
      </View>
    </Pressable>
  );
};

export default ListBar;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  left: {
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  gap: {
    paddingVertical: 5,
  },
});
