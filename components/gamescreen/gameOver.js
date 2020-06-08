import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import Card from '../card';

const GameOver = (props)=>
{
  const {screen, buttonContainer, inputContainer} = styles;
  return(
  <View style={screen}>
      <Card style={inputContainer}>
        <Text>
          The game is over
        </Text>
        <Text>
          Rounds taken:{props.roundsTaken}
        </Text>
        <Text>
          Computer Guess:{props.computerGuess}
        </Text>
        <View style={buttonContainer}>
        <Button title="Restart the game" onPress={()=>{props.setTransitionState(false)}}/>
        </View>
      </Card>
  </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginLeft: '30%',
    marginTop: 30
  },
  inputContainer:{
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  }
})

export default GameOver;