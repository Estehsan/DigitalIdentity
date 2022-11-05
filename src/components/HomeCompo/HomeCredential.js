import {
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { H1, H2, H3 } from "../basics";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeCredential = ({ navigation }) => {
  return (
    <View style={styles.Main}>
      <View style={styles.Top}>
        <View style={styles.gap}>
          <H1>Credentials</H1>
        </View>
        <View style={styles.Box}>
          {/* Four boxes  */}
          <View style={styles.Left}>
            {/* First Row */}
            <View style={styles.OuterBox}>
              <View style={styles.BoxIcon}>
                <Octicons name="person" size={36} color="black" />
              </View>
              <View style={styles.gap}>
                <H3>School Admin</H3>
              </View>
            </View>
            <View style={styles.OuterBox}>
              <View style={styles.BoxIcon}>
                <Ionicons name="car" size={36} color="black" />
              </View>
              <View style={styles.gap}>
                <H3>Food Department</H3>
              </View>
            </View>
          </View>
          {/* Second Row */}
          <View style={styles.Right}>
            <View style={styles.OuterBox}>
              <View style={styles.BoxIcon}>
                <SimpleLineIcons name="graduation" size={36} color="black" />
              </View>
              <View style={styles.gap}>
                <H3>Academics</H3>
              </View>
            </View>
            <Pressable
              onPress={() => navigation.navigate("Credentials")}
              style={styles.OuterBox}>
              <View style={styles.BoxIcon}>
                <Feather name="list" size={36} color="black" />
              </View>
              <View style={styles.gap}>
                <H3 color={"blue"}>View All</H3>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCredential;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },
  gap: {
    paddingVertical: 15,
  },

  Box: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  OuterBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  BoxIcon: {
    backgroundColor: "#fff",
    paddingHorizontal: 52,
    paddingVertical: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
