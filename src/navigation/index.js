import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabNavi from "./HomeTabNavi";
import Setting from "./../screens/Setting";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
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
        options={{ headerShown: false }}
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
