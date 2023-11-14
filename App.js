import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import FlashCard from './components/FlashCard';
import ChoiceButton from './components/ChoiceButton';

const App = () => {
  const [choices, setChoices] = useState([
    4*7,
    24,
    Math.floor(Math.random() * 100) + 1,
    6*3,
  ]);

  return (
    <View flexDirection={'column'} flex={1}>
      <View style={styles.questionContainer}>
        <FlashCard />
      </View>
      <View style={styles.choicesContainter}>
        {choices.map((item) => (
          <ChoiceButton choice={item} key={item}></ChoiceButton>
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
