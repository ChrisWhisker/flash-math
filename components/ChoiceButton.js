import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ChoiceButton({choice}) {
    return (
        <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => alert(`You selected ${choice}!`)}
        >
        <Text style={styles.choiceText}>{choice}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    choiceButton: {
        backgroundColor: '#4d4d4d',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    choiceText: {
        color: 'white',
        fontSize: 24,
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
});
