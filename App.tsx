import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import ChoiceButton from "./components/ChoiceButton";
import FlashCard from "./components/FlashCard";

const App = () => {
  // Functions
  const makeFactor = (): number => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const makeChoices = (num1: number, num2: number): [number, number, number, number] => {
    return [
      (num1 + 1) * num2,
      num1 * num2,
      Math.floor(Math.random() * 100) + 1,
      num1 * (num2 - 1),
    ];
  };

  const makeNewProblem = () => {
    const newFactor1 = makeFactor();
    setFactor1(newFactor1);
    const newFactor2 = makeFactor();
    setFactor2(newFactor2);
    const newSolution = newFactor1 * newFactor2;
    setSolution(newSolution);
    // Randomize order of choices
    setChoices(
      makeChoices(newFactor1, newFactor2).sort(() => Math.random() - 0.5)
    );
  };

  const pressButton = (choice: number) => {
    if (choice === solution) {
      Alert.alert("You're right!", "", [{ text: "New problem", onPress: makeNewProblem }]);
    } else {
      Alert.alert("That's wrong.", "", [{ text: "Try again" }]);
    }
  };

  // Variables
    const [factor1, setFactor1] = useState(makeFactor());
  const [factor2, setFactor2] = useState(makeFactor());
  const [solution, setSolution] = useState(factor1 * factor2);
  const [choices, setChoices] = useState(makeChoices(factor1, factor2));

  // App
    return (
    <View style={styles.root}>
      <View style={styles.questionContainer}>
        <FlashCard question={`${factor1} x ${factor2}`} />
      </View>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <ChoiceButton
            choice={choice}
            pressHandler={pressButton}
            key={choice}
          ></ChoiceButton>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  questionContainer: {
    flex: 2,
    backgroundColor: "#2c313c",
    justifyContent: "center",
  },
  choicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#2c313c",
  },
});

export default App;
