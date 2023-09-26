import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../components/logo';
import Welcome from '../components/welcome';
import Button from '../components/button';
import { useState } from 'react';
import { UserService } from '../services/users';


export default function Login() {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [message, setMessage] = useState({ text: '', isError: false });


    const handleChange = (event) => {
        const value = event.target.value;
        setInputs({ ...inputs, [event.target.id]: value });
    }



    const login = async () => {
        const isValidValues = await UserService.verifyEmailAndPassword(inputs.email, inputs.password);

        if (!isValidValues) return setMessage({ isError: true, text: 'Invalid e-mail or password' });

        setMessage({ isError: false, text: `Welcome, ${inputs.email}` });
    }


    const register = () => {
        console.log(`Registre-se`);
    }


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Logo></Logo>
                <Welcome text="Informe os dados para entrar!"></Welcome>
                <TextInput
                    style={styles.input}
                    value={inputs.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="E-mail..."
                    placeholderTextColor="#D4D4D4"
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={inputs.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Password..."
                    placeholderTextColor="#D4D4D4"
                />
                <Button title="Entrar" action={login}></Button>
                <Button title="Registrar" action={register}></Button>
                <Text style={styles.label}>Não tem conta? Clique aqui</Text>
                <StatusBar style="auto" />

                {
                    message.text && <Text style={{ color: message.isError ? 'red' : 'green', marginTop: '5px' }}>{message.text}</Text>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
    },
    input: {
        borderWidth: 0.5,
        width: '100%',
        height: 40,
        borderRadius: 8,
        paddingLeft: 6,
        marginTop: 6,
        fontSize: '16px'
    },
    label: {
        fontSize: '16px',
        marginTop: '16px',
    },
    company: {
        position: 'absolute',
        bottom: 60,
        color: '#85929E'
    },
    form: {
        width: '30%',
        minWidth: '250px',
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});
