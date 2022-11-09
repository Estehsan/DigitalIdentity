import {
  StyleSheet,
  Text,
  View,
  useState,
  LayoutAnimation,
  Platform,
} from "react-native";
import React from "react";
import { Btn, H1, H2, H3 } from "../components/basics";
import { Switch } from "react-native-paper";

const Setting = () => {
  const defaultAnimation = {
    duration: 200,
    create: {
      duration: 200,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [maxHeight, setMaxHeight] = React.useState(null);
  const [minHeight, setMinHeight] = React.useState(null);

  // switch
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const toggleIsExpanded = () => {
    // This will make sure an animation is trigger after toggling
    LayoutAnimation.configureNext(defaultAnimation);
    setIsExpanded((prev) => !prev);
  };
  return (
    <View style={styles.main}>
      <View style={styles.TopBar}>
        <H1 fontSize={35} color="white">
          iD
        </H1>
        <H2 color="white">Version 1.0</H2>
      </View>
      <View style={styles.Descr}>
        <Btn onPress={toggleIsExpanded}>
          <View>
            <H3>General</H3>
            {!!isExpanded && (
              <View style={styles.data}>
                <H3>Wallet ID {`    `} 12312312</H3>
                <View
                  style={{
                    alignContent: "center",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <H3>Notification Enabled {`    `}</H3>
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
              </View>
            )}
          </View>
        </Btn>
        <Btn>
          <H3>Security</H3>
        </Btn>
        <Btn>
          <H3>Security</H3>
        </Btn>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  TopBar: {
    backgroundColor: "#3937B9",
    paddingVertical: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 20,
  },
  data: {
    paddingVertical: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  Descr: {
    flex: 1,
    paddingHorizontal: 30,
  },
});
