import React from "react";
import { Text, StyleSheet } from "react-native";

const MainText = ({ children }) => {
  return <Text style={styles.textTitle}>{children}</Text>;
};
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: "tomato",
    alignSelf: "center"
  },
});

export default MainText;
