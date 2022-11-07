import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { H2, H3 } from "../../components/basics";
import AdminHistoryList from "../../components/basics/AdminHistoryList";

const data = [
  {
    title: "Student Card",
    date: "20-03-2012",
    time: "30-12-20",
  },
  {
    title: "Connection Required",
    date: "20-03-2012",
    time: "30-12-20",
  },
  {
    title: "Verification Required",
    date: "20-03-2012",
    time: "30-12-20",
  },
];

const ChangeCredential = () => {
  return (
    <View style={styles.main}>
      <View style={styles.TopHeading}>
        <H2>Admin History</H2>
        <H2></H2>
        <H3>10 Transaction Made</H3>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <AdminHistoryList
              title={item.title}
              date={item.date}
              time={item.time}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChangeCredential;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopHeading: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
