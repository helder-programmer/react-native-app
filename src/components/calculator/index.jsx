import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDisplay } from "../../contexts/DisplayContext";
import CalculatorButton from "./calculatorButton";

function Calculator() {
    const { display, setDisplay } = useDisplay();

    return (
        <View>
            <View style={style.display} id="header">
                <Text style={style.text}>{display}</Text>
            </View>
            <View id="buttons" style={style.body}>
                <View style={style.buttonRow}>
                    <CalculatorButton text='AC' bgColor='#443E3B'  />
                    <CalculatorButton text='+/-' bgColor='#443E3B' />
                    <CalculatorButton text='%' bgColor='#443E3B' />
                    <CalculatorButton text='/' bgColor='#FF9F0B'  />
                </View>
                <View style={style.buttonRow}>
                    <CalculatorButton text='7' bgColor='#635E56'  />
                    <CalculatorButton text='8' bgColor='#635E56'  />
                    <CalculatorButton text='9' bgColor='#635E56'  />
                    <CalculatorButton text='X' bgColor='#FF9F0B'  />
                </View>
                <View style={style.buttonRow}>
                    <CalculatorButton text='4' bgColor='#635E56'  />
                    <CalculatorButton text='5' bgColor='#635E56'  />
                    <CalculatorButton text='6' bgColor='#635E56'  />
                    <CalculatorButton text='-' bgColor='#FF9F0B'  />
                </View>
                <View style={style.buttonRow}>
                    <CalculatorButton text='1' bgColor='#635E56'  />
                    <CalculatorButton text='2' bgColor='#635E56'  />
                    <CalculatorButton text='3' bgColor='#635E56'  />
                    <CalculatorButton text='+' bgColor='#FF9F0B'  />
                </View>
                <View style={style.buttonRow}>
                    <CalculatorButton text='0' bgColor='#635E56' width='50%'  />
                    <CalculatorButton text=',' bgColor='#635E56'  />
                    <CalculatorButton text='=' bgColor='#635E56'  />
                </View>
            </View>
        </View>
    );
}


const style = StyleSheet.create({
    display: {
        width: '100%',
        height: '30%',
        backgroundColor: '#302926',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: '10px'
    },
    text: {
        color: '#ffffff',
        fontSize: '60px'
    },
    body: {
        width: '100%',
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
});



export default Calculator;
