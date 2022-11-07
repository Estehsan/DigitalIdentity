import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import Home from "../screens/Home";
import History from "../screens/History";
import Setting from "../screens/Setting";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeSub from "./HomeSub";
import HistorySub from "./HistorySub";
import ScanSub from "./ScanSub";

const Tab = createBottomTabNavigator();

const HomeTabNavi = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        // add icons of bottom tab navigator
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
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
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={35}
              color={color}
            />
          ),
        }}
        name="ScanSub"
        component={ScanSub}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={size} color={color} />
          ),
        }}
        name="HistorySub"
        component={HistorySub}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavi;
