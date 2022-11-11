import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BackgroundOnboard, Gap, H2 } from "../../components/basics";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const PendingVerification = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.push("HomeTabNavi");
    }, 5000);
  }, [navigation]);

  return (
    <BackgroundOnboard>
      <View style={styles.main}>
        <ActivityIndicator size={100} animating={true} color={"white"} />
        <Gap />
        <Gap />
        <Gap />
        <H2 textAlign={"center"} color={"#fff"}>
          Verification in progress. This may may takes a few minutes .
        </H2>
      </View>
    </BackgroundOnboard>
  );
};

export default PendingVerification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});
