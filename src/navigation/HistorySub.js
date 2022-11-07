import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "../screens/History";
import { AntDesign } from "@expo/vector-icons";
import AdminHistory from "./../screens/HistorySub/AdminHistory";

const Stack = createNativeStackNavigator();

const HistorySub = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{
          tabBarShowLabel: false,
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
          headerTitle: "",
          headerRight: () => (
            <Pressable
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("Setting")}>
              <AntDesign name="setting" size={30} color="black" />
            </Pressable>
          ),
        }}
        name="History"
        component={History}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
        name="AdminHistory"
        component={AdminHistory}
      />
    </Stack.Navigator>
  );
};

export default HistorySub;

const styles = StyleSheet.create({});
