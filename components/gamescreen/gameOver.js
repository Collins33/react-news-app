import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const GameOver = (props)=>
{
  return(
    <View>
    <Text>
      The game is over
    </Text>
  </View>
    
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GameOver;