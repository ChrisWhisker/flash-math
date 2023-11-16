import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import ChoiceButton from "./components/ChoiceButton";
import FlashCard from "./components/FlashCard";

const App = () => {
  // Functions
  const makeFactor = (): number => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const makeChoices = (f1: number, f2: number): number[] => {
    console.log(`Making choices. Equation is ${f1} x ${f2}`);
    const newChoices = [
      f1 * f2,
      (f1 + 1) * f2,
      f1 * (f2 - 1),
      Math.floor(Math.random() * 100) + 1,
    ];
    console.log(`New choices are ${newChoices}`);
    return newChoices;
  };

  const makeNewEquation = () => {
    const newFactor1 = makeFactor();
    setFactor1(newFactor1);
    const newFactor2 = makeFactor();
    setFactor2(newFactor2);
    const newSolution = newFactor1 * newFactor2;
    setSolution(newSolution);
    // Randomize order of choices
    const newChoices = makeChoices(newFactor1, newFactor2).sort(() => Math.random() - 0.5);
    console.log(`New choices shuffled are ${newChoices}`);
    setChoices(newChoices);
  };

  const pressButton = (choice: number) => {
    if (choice === solution) {
      Alert.alert("You're right!", "", [{ text: "New problem", onPress: makeNewEquation }]);
    } else {
      Alert.alert("That's wrong.", "", [{ text: "Try again" }]);
    }
  };

  // Variables
  const [factor1, setFactor1] = useState(makeFactor);
  const [factor2, setFactor2] = useState(makeFactor);
  const [solution, setSolution] = useState(factor1 * factor2);
  const [choices, setChoices] = useState(() => makeChoices(factor1, factor2));

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
