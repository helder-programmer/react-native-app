import { View, StyleSheet } from "react-native";
import Calculator from "../components/calculator";

function MainPage() {
    return (
        <View style={styles.container}>
            <Calculator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        width: '100vw'
    }
});

export default MainPage;