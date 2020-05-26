import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const StartGame = ({gameScreenTitle})=>
{
  const {startGameScreen} = styles
  return(
    <View style={startGameScreen}>
    <Text>
      {gameScreenTitle}
    </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  startGameScreen:{
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  }
})

export default StartGame;