import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../theme/colors"

export default Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: Colors.accent,
    fontSize: 24,
    fontWeight: "bold"
  }
});
