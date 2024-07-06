import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import Login from '../../Application/Screens/LoginScreen/Login'

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20

  }
});
