import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigations/Navigation';

export default function App() {
  return (
    <NavigationContainer>
        <Navigation />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
