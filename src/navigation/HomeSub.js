import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Credentials from "../screens/HomeSub/Credentials";
import FinalID from "../screens/HomeSub/FinalID";

const Stack = createNativeStackNavigator();

const HomeSub = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{
          headerStyle: {
            shadowColor: "transparent", // this covers iOS
            elevation: 0, // this covers Android
          },
        }}
        name="Credentials"
        component={Credentials}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
        name="FinalID"
        component={FinalID}
      />
    </Stack.Navigator>
  );
};

export default HomeSub;

const styles = StyleSheet.create({});
