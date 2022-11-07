import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { H1, ListBar } from "../components/basics";
import { Searchbar } from "react-native-paper";

const History = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.main}>
      <H1>Trascaction History</H1>
      <Searchbar
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={0}
        style={styles.search}
      />
      <ListBar
        title="Admin Department"
        subTitle="Last transaction: 09-09-2022"
        icon={"human-male"}
        onPress={() => navigation.navigate("AdminHistory")}
      />
      <ListBar
        title="CCA Department"
        subTitle="Last transaction: 09-09-2022"
        icon={"car-back"}
        onPress={() => navigation.navigate("AdminHistory")}
      />
      <ListBar
        title="Food Department"
        subTitle="Last transaction: 09-09-2022"
        icon={"car-back"}
        onPress={() => navigation.navigate("AdminHistory")}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  search: {
    margin: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
});
