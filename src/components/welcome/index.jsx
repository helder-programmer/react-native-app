import { StyleSheet, Text } from "react-native";

export default function Welcome(props) {
  return (
    <Text style={styles.label}>{props.text}</Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    letterSpacing: '-0.75px',
    fontSize: '18pt',
    marginBottom: 40
  }
});