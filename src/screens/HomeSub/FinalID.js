import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardFrame from "../../components/HomeCompo/CardFrame";
import { H3, H2, P } from "../../components/basics";

const FinalID = ({ route }) => {
  const { title } = route.params;
  return (
    <View style={styles.Main}>
      <View style={styles.TopBar}>
        <CardFrame
          title={title}
          color="#2926AB"
          name="Shani"
          id="23213"
          image={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          }
        />
      </View>
      <View style={styles.Descr}>
        <H2>Details</H2>
        <View style={styles.gap} />
        <View style={styles.gap} />
        <H2>
          Name: <P>Test</P>
        </H2>
        <View style={styles.gap} />
        <H2>
          ID: <P>Test</P>
        </H2>
        <View style={styles.gap} />
        <H2>
          Issue Date: <P>04-12-2020</P>
        </H2>
        <View style={styles.gap} />
        <H2>
          Expiry Date: <P> 01-21-2042</P>
        </H2>
        <View style={styles.gap} />
        <H2>
          Address: <P>Newcastle</P>
        </H2>
        <View style={styles.gap} />
      </View>
    </View>
  );
};

export default FinalID;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    // paddingHorizontal: 20,
  },
  TopBar: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  gap: {
    height: 20,
  },
  Descr: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 20,

    backgroundColor: "#fff",
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
});
