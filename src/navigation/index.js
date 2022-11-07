import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabNavi from "./HomeTabNavi";
import Setting from "./../screens/Setting";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeTabNavi">
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="AuthTabNavi"
        component={AuthTabNavi}
      /> */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeTabNavi"
        component={HomeTabNavi}
      />
      <Stack.Screen
        options={{
          // header back icon in blue color
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headersize: 20,
          // header background color in green color
          headerStyle: {
            backgroundColor: "#3937B9",
          },
        }}
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
