import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../screens/Home";
import Scan from "../screens/Scan";
import History from "../screens/History";
import Setting from "../screens/Setting";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeSub from "./HomeSub";

const Tab = createBottomTabNavigator();

const HomeTabNavi = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        // add icons of bottom tab navigator
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        name="HomeSub"
        component={HomeSub}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={35}
              color={color}
            />
          ),
        }}
        name="Scan"
        component={Scan}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={size} color={color} />
          ),
        }}
        name="History"
        component={History}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavi;
