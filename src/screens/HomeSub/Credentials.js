import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { H2, H3, ListBar } from "../../components/basics";
import { Avatar } from "react-native-paper";

const Credentials = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.main}>
      <Searchbar
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={0}
        style={styles.search}
      />
      <ListBar
        onPress={() =>
          navigation.navigate("FinalID", { title: "School Admin" })
        }
        title="School Admin"
        subTitle="Student Card"
        icon={"human-male"}
      />
      <ListBar
        // passing props to child components
        onPress={() =>
          navigation.navigate("FinalID", {
            title: "CCA Department Admin",
          })
        }
        title="CCA Department Admin"
        subTitle="CCA Cards"
        icon={"car-back"}
      />
      <ListBar
        onPress={() => navigation.navigate("FinalID", { title: "Food Card" })}
        title="Food Card"
        subTitle="Food Discounts"
        icon={"car-back"}
      />
    </View>
  );
};

export default Credentials;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  gap: {
    paddingVertical: 5,
  },
  left: {
    paddingHorizontal: 45,
    paddingVertical: 10,
  },
  search: {
    margin: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
});
