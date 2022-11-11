import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

// Create a four digit pin component in React Native
const FourPin = () => {
  const pin1Ref = React.useRef();
  const pin2Ref = React.useRef();
  const pin3Ref = React.useRef();
  const pin4Ref = React.useRef();

  const [pin1, setPin1] = React.useState(null);
  const [pin2, setPin2] = React.useState(null);
  const [pin3, setPin3] = React.useState(null);
  const [pin4, setPin4] = React.useState(null);

  return (
    <KeyboardAvoidingView style={styles.fourPin}>
      <TextInput
        ref={pin1Ref}
        style={styles.pin}
        limitLength={1} // limit the length of the input
        mode="outlined"
        onChange={(e) => {
          setPin1(e);
          if (pin1 !== "") {
            pin2Ref.current.focus();
          }
        }}
        keyboardType="number-pad"
        maxLength={1}
      />
      <TextInput
        style={styles.pin}
        ref={pin2Ref}
        limitLength={1} // limit the length of the input
        mode="outlined"
        onChange={(e) => {
          setPin2(e);
          if (pin2 !== "") {
            pin3Ref.current.focus();
          }
        }}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.pin}
        ref={pin3Ref}
        mode="outlined"
        maxLength={1}
        keyboardType="number-pad"
        onChange={(e) => {
          setPin3(e);
          if (pin3 !== "") {
            pin4Ref.current.focus();
          }
        }}
      />
      <TextInput
        style={styles.pin}
        ref={pin4Ref}
        maxLength={1}
        mode="outlined"
        keyboardType="number-pad"
        onChange={(e) => {
          setPin4(e);
          if (pin4 !== "") {
            pin4Ref.current.blur();
          }
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default FourPin;

const styles = StyleSheet.create({
  pin: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 20,
  },
  fourPin: {
    flexDirection: "row",
    paddingVertical: 20,
  },
});
