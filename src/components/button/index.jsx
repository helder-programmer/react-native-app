import { StyleSheet, Pressable, Text } from "react-native";

export default function MyButton({ title, action }) {
  return (
    <Pressable onPress={action} style={styles.button}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0072E1',
    width: '100%',
    borderRadius: 8,
    marginTop: 6
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    padding: 12,
  }
});