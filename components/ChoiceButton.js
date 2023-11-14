import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ChoiceButton({choice, pressHandler}) {
    return (
        <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => pressHandler(choice)}
        >
        <Text style={styles.choiceText}>
            {choice}
        </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    choiceButton: {
        backgroundColor: '#4d4d4d',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    choiceText: {
        color: 'white',
        fontSize: 24,
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
});


