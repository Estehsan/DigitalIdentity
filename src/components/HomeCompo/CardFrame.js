import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { H1, H2, H3 } from "../basics";

const { width } = Dimensions.get("window");

const CardFrame = ({ title, name, id, image, color }) => {
  return (
    <View
      style={{
        backgroundColor: color ? color : "#F8DD45",
        width: width * 0.8,
        height: width / 2,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingVertical: 5,
      }}>
      <View style={styles.Top}>
        <H1 fontSize={24} color={color ? "#fff" : "#000"}>
          {title}
        </H1>
      </View>
      <View
        style={[
          styles.line,
          {
            backgroundColor: color ? "#D1B8B8" : "#D6BE62",
          },
        ]}
      />
      <View style={styles.Bottom}>
        <View>
          <View>
            <H3 color={color ? "#fff" : "#000"}>Name</H3>
            <H2 color={color ? "#fff" : "#000"}>{name}</H2>
          </View>
          <View style={styles.space} />
          <View>
            <H3 color={color ? "#fff" : "#000"}>ID No</H3>
            <H2 color={color ? "#fff" : "#000"}>{id}</H2>
          </View>
        </View>
        <View style={styles.BottomRight}>
          <Image
            resizeMode="cover"
            source={{
              uri: image,
            }}
            style={styles.BottomRightImage}
          />
        </View>
      </View>
    </View>
  );
};

export default CardFrame;

const styles = StyleSheet.create({
  MainFrame: {
    width: "100%",
    borderRadius: 30,
    paddingVertical: 20,
  },
  Top: {
    paddingHorizontal: width / 20,
  },
  line: {
    width: "100%",
    height: 7,

    marginTop: 10,
  },
  Bottom: {
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
  },
  BottomRightImage: {
    width: 120,
    height: 100,
  },
  space: {
    height: 10,
  },
});
