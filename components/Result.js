import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Result({ value }) {
    return (
        <View style={styles.outerContainer}>
            <Text style={styles.text}>Counter</Text>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{value}</Text>
            </View>
        </View>
    );
}

export default Result;

const styles = StyleSheet.create({
    outerContainer: {
        height: 160,
        width: 140,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'black',
        backgroundColor: 'lightblue',
    },
    innerContainer: {
        marginTop: 30,
    },
    text: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
