import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import FlashCard from './components/FlashCard';
import ChoiceButton from './components/ChoiceButton';

const App = () => {

  const [factor1, setfactor1] = useState(Math.floor(Math.random() * 10) + 1);
  const [factor2, setfactor2] = useState(Math.floor(Math.random() * 10) + 1);
  const solution = factor1 * factor2;

  const [choices, setChoices] = useState([
    4*7,
    solution,
    Math.floor(Math.random() * 100) + 1,
    6*3,
  ]);

  return (
    <View flexDirection={'column'} flex={1}>
      <View style={styles.questionContainer}>
        <FlashCard question={`${factor1} x ${factor2}`}/>
      </View>
      <View style={styles.choicesContainter}>
        {choices.map((choice) => (
          <ChoiceButton choice={choice} solution={solution} key={choice}></ChoiceButton>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 2,
    backgroundColor: '#2c313c',
    justifyContent: 'center',
  },
  choicesContainter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#2c313c',
  },
});

export default App;
