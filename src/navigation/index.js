import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabNavi from "./HomeTabNavi";
import Setting from "./../screens/Setting";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        elevation: 0,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 10 }, // change this for more shadow
        shadowOpacity: 0.4,
        shadowRadius: 6,
      }}
      initialRouteName="HomeTabNavi">
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="AuthTabNavi"
        component={AuthTabNavi}
      /> */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
        name="HomeTabNavi"
        component={HomeTabNavi}
      />
      <Stack.Screen
        options={{
          // header back icon in blue color
          headerBackTitleVisible: false,
          headerTintColor: "white",

          // header background color in green color
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
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
