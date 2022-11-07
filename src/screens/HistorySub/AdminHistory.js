import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { H1, H2, H3 } from "../../components/basics";
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
  {
    title: "Student Card Received",
    date: "20-03-2012",
    time: "30-12-20",
  },
];

const AdminHistory = () => {
  return (
    <View style={styles.main}>
      <View style={styles.TopHeading}>
        <H2>Select Credential</H2>
        <H2>Name</H2>

        <H2></H2>
        <H3>2 Credential Available</H3>
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

export default AdminHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopHeading: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
  },
});
