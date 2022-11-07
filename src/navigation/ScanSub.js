import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scan from "../screens/Scan";
import ProofRequest from "../screens/ScanSub/ProofRequest";
import ChangeCredential from "../screens/ScanSub/ChangeCredential";
const Stack = createNativeStackNavigator();

const ScanSub = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
        name="Scan"
        component={Scan}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
        name="ProofRequest"
        component={ProofRequest}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
        name="ChangeCredential"
        component={ChangeCredential}
      />
    </Stack.Navigator>
  );
};

export default ScanSub;

const styles = StyleSheet.create({});
