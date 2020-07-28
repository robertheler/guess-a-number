import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberRounds, setNumberRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setNumberRounds(0);
  };
  const resetHandler = () => {
    setUserNumber(undefined);
    setNumberRounds(0);
  };

  const gameOverHandler = rounds => {
    setNumberRounds(rounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess numbers with Berty!" />
      {userNumber ? (
        numberRounds <= 0 ? (
          <Game
            userChoice={userNumber}
            onReset={resetHandler}
            onGameOver={gameOverHandler}
          />
        ) : (
          <GameOver numberRounds={numberRounds} userNumber={userNumber}/>
        )
      ) : (
        <StartGame onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
