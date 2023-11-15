import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    question: string;
};

export default function FlashCard({ question }: Props) {
    return (
        <View style={styles.flashCard}>
            <TouchableOpacity style={styles.closeButton}>
                <MaterialIcons name="close" size={40} style={styles.closeIcon}/>
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
        justifyContent: "center",
    },
    flashCardText: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 48,
        color: "#2c313c",
        paddingHorizontal: 100,
        paddingTop: 60,
        paddingBottom: 100,
    },
    closeButton: {
        alignSelf: "flex-end",
        alignContent: "center",
        justifyContent: "center",
        padding: 5,
    },
    closeIcon: {
        color: "#666666",
        alignSelf: "center",
    }
});
