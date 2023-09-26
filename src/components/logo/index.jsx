import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image style={styles.logo} source={require('../../../assets/logo.png')}></Image>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180
  }
});