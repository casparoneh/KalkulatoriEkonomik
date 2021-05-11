import React, { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


const MainButton = ({ txtButton }) => {


  return (
    
      <View style={styles.button}>
        <Text style={styles.buttonText}>{txtButton}</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
    width: "100%",
   
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default MainButton;
