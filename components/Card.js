import React from "react";
import { View, StyleSheet } from "react-native";

export default Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    //width: 300,
    //maxWidth: "80%",
    //alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    backgroundColor: "white",
    elevation: 15,
    padding: 20,
    borderRadius: 15,
  }
});
