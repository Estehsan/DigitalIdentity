import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Credentials from "../screens/HomeSub/Credentials";
import FinalID from "../screens/HomeSub/FinalID";
import Setting from "../screens/Setting";

import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const HomeSub = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Setting")}>
              <AntDesign name="setting" size={30} color="black" />
            </Pressable>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerTitle: "Credentials",
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "transparent",
            elevation: 0,
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
