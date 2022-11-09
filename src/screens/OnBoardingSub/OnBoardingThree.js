import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BackgroundOnboard, H1, H2 } from "../../components/basics";
import { Button } from "react-native-paper";
const OnBoardingThree = ({ navigation }) => {
  return (
    <BackgroundOnboard>
      <View style={styles.main}>
        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
          <H2 textAlign={"center"} color={"#fff"}>
            Please allow location to be enabled to continue to prevent
            fraundulent activities
          </H2>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.EndBtn}>
            <Button
              onPress={() => navigation.navigate("onBoardingFour")}
              textColor="#000"
              buttonColor="#fff"
              mode="elevated">
              SAVE PIN
            </Button>
          </View>
        </View>
      </View>
    </BackgroundOnboard>
  );
};

export default OnBoardingThree;

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
