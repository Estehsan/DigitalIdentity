import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { H1, H2 } from "../../components/basics";
import { ProgressBar, Button } from "react-native-paper";
import { FourPin } from "../../components/onBoardCompo";

const OnBoardingOne = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
        <ProgressBar progress={0.5} color={"#fff"} />

        <H2 color={"#fff"}>Enter a 4 digit pin</H2>
        <FourPin />
      </View>
      <View style={{ flex: 1 }}>
        {/* Add a button in React Native  */}
        <View style={styles.EndBtn}>
          <Button
            onPress={() => navigation.navigate("onBoardingTwo")}
            textColor="#000"
            buttonColor="#fff"
            mode="elevated">
            SAVE PIN
          </Button>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingOne;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#3937B9",
    alignItems: "center",
    justifyContent: "center",
  },

  EndBtn: {
    flex: 1,
    // bottom position
    justifyContent: "flex-end",
    paddingBottom: 80,
  },
});
