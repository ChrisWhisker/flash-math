import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FlashCard from './components/FlashCard';

const App = () => {
  const [choices, setChoices] = useState([ 4*7, 24, Math.floor(Math.random() * 100) + 1, 6*3, ]);

  function onButtonPress(title) {
    alert(`Button ${title} pressed`);
  }

  return (
    <View flexDirection={'column'} flex={1}>
      <View style={styles.questionContainer}>
        <FlashCard />
      </View>
      <View style={styles.choicesContainter}>
        {choices.map((item) => (
          <TouchableOpacity style={styles.button} key={item}>
          <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: '#4d4d4d', // Customize the button background color
    padding: 20, // Customize the padding to increase the button size
    margin: 20,
    borderRadius: 10, // Optional: add border radius for rounded corners
  },
  buttonText: {
    color: 'white', // Customize the button text color
    fontSize: 24, // Customize the button text size
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
});

export default App;
