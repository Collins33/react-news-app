import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGame from './components/gamescreen/startGame';

export default function App() {
  const headerTile = 'Guess a number'
  const gameScreenTitle = 'The game screen'
  const {container} = styles;
  return (
    <View style={container}>
      <Header title={headerTile}/>
      <StartGame gameScreenTitle={gameScreenTitle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
