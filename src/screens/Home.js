import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CardFrame from "../components/HomeCompo/CardFrame";
import HomeCredential from "../components/HomeCompo/HomeCredential";

const data = [
  {
    id: "1",
    title: "Student ID",
    name: "Shani",
    id: "1235 12",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    id: "2",
    title: "Office ID",
    name: "Wow",
    id: "1235 12",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
];

const { width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      {/* Horizontal Carousel Slider of View */}
      {/* Flatlist Carousel Slider */}

      <FlatList
        snapToOffsets={[...Array(data.length).keys()].map(
          (i, x) => i * (width - 60 * 40) + (i - 1) * 40
        )}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={300}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CardFrame
              title={item.title}
              name={item.name}
              id={item.id}
              image={item.image}
              navigation={navigation}
            />
          );
        }}
      />

      <HomeCredential navigation={navigation} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
