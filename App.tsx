import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SignIn } from './app/screens/SignIn';

export default function App() {
  return (
    <PaperProvider>
      <SignIn/>
    </PaperProvider>
  );
}

