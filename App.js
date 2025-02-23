import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';

export default function App() {
  const handlePassValue = (nama, umur) => {
    console.log(`Received Name: ${nama}, Age: ${umur}`);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Profile onPassValue={handlePassValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
