import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Colors from "../theme/colors";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return random;
  }
};

const Game = ({ userChoice, onReset, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  // useRef allows us to keep data between re-renders
  // could also use state but we don't want to trigger re-render
  // in class components, we could just use variables
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const numRounds = useRef(0);

  // executed AFTER each re-render
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(numRounds);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = direction => {
    if (direction === "LOWER" && currentGuess > userChoice) {
      currentHigh.current = currentGuess;
      setCurrentGuess(
        generateRandomNumber(
          currentLow.current,
          currentHigh.current,
          currentGuess
        )
      );
      numRounds.current++;
    } else if (direction === "HIGHER" && currentGuess < userChoice) {
      currentLow.current = currentGuess;
      setCurrentGuess(
        generateRandomNumber(
          currentLow.current,
          currentHigh.current,
          currentGuess
        )
      );
      numRounds.current++;
    } else {
      Alert.alert(`Don't lie!`, "You know this is wrong...", {
        text: "Sorry!",
        style: "cancel"
      });
      return;
    }
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuessHandler("LOWER")} />
        <Button title="HIGHER" onPress={() => nextGuessHandler("HIGHER")} />
      </Card>

      <View style={{ marginTop: 30 }}>
        <Button title="Reset game" onPress={() => onReset()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.background
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default Game;
