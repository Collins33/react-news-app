import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  const headerTile = 'Guess a number'
  const {container} = styles;
  return (
    <View style={container}>
      <Header title={headerTile}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
