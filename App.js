import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ChoiceButton from "./components/ChoiceButton";
import FlashCard from "./components/FlashCard";

const App = () => {
  // Functions
  const makeFactor = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const makeChoices = (num1, num2) => {
    return [
      (num1 + 1) * num2,
      num1 * num2,
      Math.floor(Math.random() * 100) + 1,
      num1 * (num2 - 1),
    ];
  };

  const pressButton = (choice) => {
    console.log(`Solution is ${solution}. Button ${choice} was pressed.`);
    if (choice === solution) {
      alert(`You're right!`);
      const newFactor1 = makeFactor();
      setfactor1(newFactor1);
      const newFactor2 = makeFactor();
      setfactor2(newFactor2);
      const newSolution = newFactor1 * newFactor2;
      setsolution(newSolution);
      setChoices(
        makeChoices(newFactor1, newFactor2).sort(() => Math.random() - 0.5)
      );
    } else {
      alert("Try again.");
    }
  };

  // Variables
  const [factor1, setfactor1] = useState(makeFactor());
  const [factor2, setfactor2] = useState(makeFactor());
  const [solution, setsolution] = useState(factor1 * factor2);
  const [choices, setChoices] = useState(makeChoices(factor1, factor2));

  // App
  return (
    <View flexDirection={"column"} flex={1}>
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
