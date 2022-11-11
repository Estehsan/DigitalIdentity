import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BackgroundOnboard, H2 } from "../../components/basics";
import { FourPin } from "../../components/onBoardCompo";
import { Button } from "react-native-paper";

const OnBoardingTwo = ({ navigation }) => {
  const pin1Ref = React.useRef();
  const pin2Ref = React.useRef();
  const pin3Ref = React.useRef();
  const pin4Ref = React.useRef();

  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");

  return (
    <BackgroundOnboard>
      <View style={styles.main}>
        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
          <H2 color={"#fff"}>Please Re-Enter a 4 digit pin</H2>
          <FourPin />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.EndBtn}>
            <Button
              onPress={() => navigation.navigate("onBoardingThree")}
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

export default OnBoardingTwo;

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
