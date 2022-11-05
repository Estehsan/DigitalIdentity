import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  Title,
} from "react-native-paper";
import * as Font from "expo-font";

import Navigation from "./src/navigation";

export default function App() {
  React.useEffect(() => {
    (async () => {
      await Font.loadAsync({
        RedHatDisplay_regular: require("./assets/fonts/RedHatDisplay-Regular.ttf"),
        RedHatDisplay_SemiBold: require("./assets/fonts/RedHatDisplay-SemiBold.ttf"),
        RedHatDisplay_Light: require("./assets/fonts/RedHatDisplay-Light.ttf"),
      });
    })();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <StatusBar style="auto" /> */}
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
