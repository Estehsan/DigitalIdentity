import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal, Portal, Button, Provider, Avatar } from "react-native-paper";
import { Gap, H2, H3 } from "../components/basics";

const Scan = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 300,
    borderRadius: 30,
    width: 350,
    alignSelf: "center",
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Avatar.Icon size={45} icon="account" />
          <Gap />
          <Gap />

          <H2>Admin </H2>

          <H2>want to connect</H2>
          <Gap />
          <Gap />

          <View style={styles.row}>
            <Button
              style={{ marginRight: 10 }}
              mode="outlined"
              onPress={hideModal}>
              Decline
            </Button>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("ProofRequest")}>
              Accept
            </Button>
          </View>
        </Modal>
      </Portal>
      <Pressable onPress={showModal} style={styles.main}>
        <Image
          source={{
            uri: "https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png",
          }}
          style={styles.image}
        />
      </Pressable>
    </Provider>
  );
};

export default Scan;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
