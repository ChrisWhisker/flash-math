import React, { useState } from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import ChoiceButton from "./components/ChoiceButton";
import FlashCard from "./components/FlashCard";

const App = () => {
  // Functions
  const makeFactor = (): number => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const generateWrongAnswer = (f1: number, f2: number, choiceList: number[]) => {
    let wrongAnswer: number, approachName: string, details = "";
    const generationApproach = Math.random();

    if (generationApproach < 0.667) {
      // increment or decrement one of the factors
      approachName = "Shifted Factor";
      do {
        const factorToShift = Math.random() > 0.5 ? f1 : f2;
        const shiftAmount = Math.random() > 0.5 ? 1 : -1;

        if (factorToShift === f1) {
          wrongAnswer = (factorToShift + shiftAmount) * f2;
          details = `(${(factorToShift + shiftAmount)} x ${f2})`;
        } else {
          wrongAnswer = f1 * (factorToShift + shiftAmount);
          details = `(${f1} x ${(factorToShift + shiftAmount)})`;
        }
      } while (choiceList.includes(wrongAnswer));
    } else if (generationApproach < 0.889) {
      // new equation
      approachName = "New Equation";
      const newFactor1 = Math.floor(Math.random() * 10) + 1;
      do {
        const newFactor2 = Math.floor(Math.random() * 10) + 1;
        wrongAnswer = newFactor1 * newFactor2;
        details = `(${newFactor1} x ${newFactor2})`;
      } while (choiceList.includes(wrongAnswer));
    } else {
      // random 1-100
      approachName = "Random Number 1-100";
      do {
        wrongAnswer = Math.floor(Math.random() * 100) + 1;
      } while (choiceList.includes(wrongAnswer));
    }
    console.log(
      `Choice ${wrongAnswer} generated using approach: ${approachName} ${details}`
    );
    return wrongAnswer;
  };

  const makeChoices = (f1: number, f2: number): number[] => {
    console.log(`Making choices. Equation is ${f1} x ${f2}`);
    let newChoices = [f1 * f2];

    for (let i = 0; i < 3; i++) {
      newChoices.push(generateWrongAnswer(f1, f2, newChoices));
    }
    // console.log(`New choices are ${newChoices}`);
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
    const newChoices = makeChoices(newFactor1, newFactor2).sort(
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
  const [factor1, setFactor1] = useState(makeFactor);
  const [factor2, setFactor2] = useState(makeFactor);
  const [solution, setSolution] = useState(factor1 * factor2);
  const [choices, setChoices] = useState(() => makeChoices(factor1, factor2));

  // App
  return (
    <View style={styles.root}>
      <StatusBar barStyle = "light-content" backgroundColor = "#1c1f26"/>
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
