import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardFrame from "../components/HomeCompo/CardFrame";
import HomeCredential from "../components/HomeCompo/HomeCredential";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <CardFrame
        title="Student ID"
        name="Shani"
        id="1235 12"
        image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      />
      <HomeCredential navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
