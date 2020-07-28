import React from 'react'; //imr
import { Text, View, StyleSheet } from "react-native";

//slr shortcut: stateless component return
const GameOver = ({userNumber,numberRounds}) => {
  return (
    <View style={styles.screen}>
      <Text>G A M E  O V E R</Text>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
export default GameOver;