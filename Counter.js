import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import Result from './components/Result';
import PrimaryButton from './components/PrimaryButton';

function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <View style={styles.outerContainer}>
            <Result value={counterValue} />
            <View style={styles.buttonContainer}>
                <PrimaryButton buttonType="+" onPress={() => dispatch(increment())} />
                <PrimaryButton buttonType="-" onPress={() => dispatch(decrement())} />
            </View>
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
});
