import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  onBoardingFour,
  onBoardingOne,
  onBoardingThree,
  onBoardingTwo,
} from "../screens/OnBoardingSub";

const Stack = createNativeStackNavigator();

const OnBoardingNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="onBoardingOne"
        component={onBoardingOne}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="onBoardingTwo"
        component={onBoardingTwo}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="onBoardingThree"
        component={onBoardingThree}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="onBoardingFour"
        component={onBoardingFour}
      />
    </Stack.Navigator>
  );
};

export default OnBoardingNavi;

const styles = StyleSheet.create({});
