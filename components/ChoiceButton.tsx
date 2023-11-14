import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    choice: number;
    pressHandler: Function;
};

export default function ChoiceButton({ choice, pressHandler }: Props) {
    return (
        <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => pressHandler(choice)}
        >
            <Text style={styles.choiceText}>{choice}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    choiceButton: {
        backgroundColor: "#4d4d4d",
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        width: 150,
        height: 100,
        justifyContent: "center",
    },
    choiceText: {
        textAlign: "center",
        color: "white",
        fontSize: 24,
    },
});
