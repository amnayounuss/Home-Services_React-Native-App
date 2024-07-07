import { Image, StyleSheet, Platform, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import Login from '../../Application/Screens/LoginScreen/Login'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function HomeScreen() {
  return (
    <ClerkProvider publishableKey='pk_test_Y2xlYW4tZGlub3NhdXItODEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <ThemedView style={styles.container}>
        <SignedIn>
          <Text> You are SignIn </Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </ThemedView >
    </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20

  }
});
