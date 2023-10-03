import { Pressable, StyleSheet, Text } from "react-native";
import { useDisplay } from "../../../contexts/DisplayContext";

function CalculatorButton({ text, bgColor, width }) {
    const { display, setDisplay } = useDisplay();

    const pressButton = (buttonValue) => {
        
        if (buttonValue === 'AC') return clearDisplay();

        if (display === '0') return setDisplay(buttonValue);

        if (buttonValue === 'X') buttonValue = '*';

        if (buttonValue === ',') buttonValue = '.';

        if (buttonValue === '=') return calculate();

        setDisplay(display => display + buttonValue);
    }


    const calculate = () => {
        const result = eval(display);
        setDisplay(result);
    }

    const clearDisplay = () => {
        setDisplay('0');
    }

    return (
        <Pressable
            style={[style.button, { backgroundColor: bgColor, width: width ? width : '25%' }]}
            onPress={() => pressButton(text)}
        >
            <Text style={style.text}>{text}</Text>
        </Pressable>
    );
}


const style = StyleSheet.create({
    button: {
        width: '25%',
        height: '125px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderColor: '#333333',
        borderWidth: '0.5px',
        borderStyle: 'solid'
    },
    text: {
        fontSize: '32px',
        color: '#FFFFFF'
    }
});


export default CalculatorButton;