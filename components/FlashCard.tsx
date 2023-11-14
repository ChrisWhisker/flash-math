import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    question: string;
};
export default function FlashCard({ question }: Props) {
    return (
        <View style={styles.flashCard}>
            <TouchableOpacity style={styles.closeButton}>
                <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>
            <Text style={styles.flashCardText}>{question}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flashCard: {
        backgroundColor: "grey",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "black",
    },
    flashCardText: {
        textAlign: "center",
        fontSize: 48,
        color: "#2c313c",
        padding: 100,
    },
    closeButton: {
        alignSelf: "flex-end",
        backgroundColor: "grey",
        borderRadius: 10,
        width: 40,
        height: 40,
    },
    closeButtonText: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        padding: 10,
    },
});
