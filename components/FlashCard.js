import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function FlashCard() {
    return (
    <View style={styles.flashCard}>
        <TouchableOpacity style = {styles.closeButton}>
            <Text style = {styles.closeButtonText}>x</Text>
        </TouchableOpacity>
        <Text style={styles.flashCardText}>4 x 6</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    flashCard: {
        backgroundColor: 'grey',
        alignSelf: 'center',
        borderRadius: 10,
    },
    flashCardText: {
        textAlign: 'center',
        fontSize: 48,
        color: '#2c313c',
        padding: 100,
    },
    closeButton: {
        alignSelf: 'flex-end',
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 40,
        height: 40,
    },
    closeButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        padding: 10,
    },
});
