import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const App = () => {

  const [choices, setChoices] = useState([ 26, 24, 48, 56, ]);

  const styles = StyleSheet.create({
    questionContainer: {
      flex: 2,
      backgroundColor: '#2c313c',
      justifyContent: 'center',
    },
    flashCard: {
      backgroundColor: '#4d4d4d',
      alignSelf: 'center',
      borderRadius: 10,
    },
    questionText: {
      textAlign: 'center',
      fontSize: 48, // Adjust the size of the '4 x 6' text
      color: 'white', // Customize the text color
      padding: 100,
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

  function onButtonPress(title) {
    alert(`Button ${title} pressed`);
  }

  return (
    <View flexDirection={'column'} flex={1}>
      <View style={styles.questionContainer}>
        <View style={styles.flashCard}>
          <Text style={styles.questionText}>4 x 6</Text>
        </View>
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

export default App;
