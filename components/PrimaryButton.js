import { Pressable, StyleSheet, Text } from "react-native";

function PrimaryButton({ buttonType, onPress }) {
    return <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]} onPress={onPress}>
        <Text>{buttonType}</Text>
    </Pressable>
}


export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        margin: 20,
        marginHorizontal: 42,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'black',
        height: 45,
        width: 45,
    },
    buttonPressed: {
        opacity: 0.5,
    }
});