import React from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from '../card';

const StartGame = ({gameScreenTitle})=>
{
  const {startGameScreen, gameScreenTitleStyle, buttonContainer, inputContainer} = styles
  return(
    <View style={startGameScreen}>
    <Text style={gameScreenTitleStyle}>
      {gameScreenTitle}
    </Text>
    <Card style={inputContainer}>
      <Text>
        Select a number
      </Text>
      <TextInput />
      <View style={buttonContainer}>
        <Button title="Reset"/>
        <Button title="Confirm"/>
      </View>
    </Card>
   </View>
  )
}

const styles = StyleSheet.create({
  startGameScreen:{
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  },
  gameScreenTitleStyle:{
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer:{
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default StartGame;