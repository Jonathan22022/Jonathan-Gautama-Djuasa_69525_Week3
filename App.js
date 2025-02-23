import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pert3_lat1 from './Pert3_lat1';
import Pert3_lat2 from './Pert3_lat2';
import Profile from './Profile';

export default function App() {
  const handlePassValue = (nama, umur) => {
    console.log(`Received Name: ${nama}, Age: ${umur}`);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Profile onPassValue={handlePassValue} />
      {/*<Latih1/>*/}
      {/*<Pert3_lat1 />*/}
      {/*<Pert3_lat2 />*/}
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
