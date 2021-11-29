import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Routes } from './app/routes';

export default function App() {
  return (
      <PaperProvider>
        <Routes />
      </PaperProvider>
  );
}