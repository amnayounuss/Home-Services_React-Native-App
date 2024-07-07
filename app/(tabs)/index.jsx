import { Image, StyleSheet, Platform, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import Login from '../../Application/Screens/LoginScreen/Login'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '../../Application/Navigations/TabNavigation';
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
  
    } catch (error) {
     
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function HomeScreen() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_Y2xlYW4tZGlub3NhdXItODEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <ThemedView style={styles.container}>
        <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
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
