import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Provider as PaperProvider,
  Title,
} from "react-native-paper";
import { useFonts } from "expo-font";
import Navigation from "./src/navigation";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  React.useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }
    getFonts();
  }, []);
  const [fontsLoaded] = useFonts({
    "RedHatDisplay-Regular": require("./assets/fonts/RedHatDisplay-Regular.ttf"),
    "RedHatDisplay-SemiBold": require("./assets/fonts/RedHatDisplay-SemiBold.ttf"),
    "RedHatDisplay-Light": require("./assets/fonts/RedHatDisplay-Light.ttf"),
  });
  // if (!fontsLoaded) {
  //   return <ActivityIndicator size={100} animating={true} color={"#000"} />;
  // }

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
