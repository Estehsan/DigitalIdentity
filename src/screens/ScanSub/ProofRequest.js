import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Btn, Gap, H1, H2, H3 } from "../../components/basics";
import { Avatar, Button, List } from "react-native-paper";

const ProofRequest = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.TopBar}>
        <Avatar.Icon size={45} icon="account" />
        <Gap />
        <H2>Admin Department</H2>
        <Gap />

        <H3>is requesting the following information</H3>
      </View>
      <ListOfData
        onPress={() => navigation.navigate("ChangeCredential")}
        heading="Name"
        subheading="Shani"
      />
      <ListOfData
        onPress={() => navigation.navigate("ChangeCredential")}
        heading="ID"
        subheading="2412 "
      />
      <ListOfData
        onPress={() => navigation.navigate("ChangeCredential")}
        heading="Image">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          }}
          style={{ height: 60, width: 60 }}
        />
      </ListOfData>

      <View style={styles.BottomBar}>
        <Button
          style={{ marginRight: 10 }}
          mode="outlined"
          onPress={() => console.log("Pressed")}>
          Declined
        </Button>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Accept
        </Button>
      </View>
    </View>
  );
};

const ListOfData = ({ children, subheading, heading, onPress }) => {
  return (
    <View style={styles.List}>
      <View style={styles.Boxes}>
        <View>
          <H2>{heading}</H2>
          {children ? children : <H3>{subheading}</H3>}
        </View>
        <View>
          <Button icon="pencil" mode="contained" onPress={onPress}>
            Change
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ProofRequest;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopBar: {
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  List: {
    paddingHorizontal: 20,
  },
  Boxes: {
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e9effe",
    paddingHorizontal: 50,
    paddingVertical: 30,
    // SHADOW
    borderRadius: 10,

    shadowColor: "#3937B9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  BottomBar: {
    justifyContent: "center",
    flexDirection: "row",
  },
});
