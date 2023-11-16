import React, { useState } from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import Calculator from "./Calculator";
import ChoiceButton from "./components/ChoiceButton";
import FlashCard from "./components/FlashCard";

const App = () => {

  const makeNewEquation = () => {
    const newFactor1 = calculator.makeFactor();
    setFactor1(newFactor1);
    const newFactor2 = calculator.makeFactor();
    setFactor2(newFactor2);
    const newSolution = newFactor1 * newFactor2;
    setSolution(newSolution);
    // Randomize order of choices
    const newChoices = calculator.makeChoices(newFactor1, newFactor2).sort(
      () => Math.random() - 0.5
    );
    console.log(`New choices shuffled are ${newChoices}`);
    setChoices(newChoices);
  };

  const pressButton = (choice: number) => {
    if (choice === solution) {
      Alert.alert("You're right!", `${factor1} x ${factor2} = ${solution}`, [
        { text: "New problem", onPress: makeNewEquation },
      ]);
    } else {
      Alert.alert("That's wrong.", "", [{ text: "Try again" }]);
    }
  };

  // Variables
  const [calculator, setCalculator] = useState(new Calculator);
  const [factor1, setFactor1] = useState(calculator.makeFactor);
  const [factor2, setFactor2] = useState(calculator.makeFactor);
  const [solution, setSolution] = useState(factor1 * factor2);
  const [choices, setChoices] = useState(() => calculator.makeChoices(factor1, factor2));

  // App
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1f26" />
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
