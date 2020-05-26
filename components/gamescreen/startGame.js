import React from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { black } from 'colorette';

const StartGame = ({gameScreenTitle})=>
{
  const {startGameScreen, gameScreenTitleStyle, buttonContainer, inputContainer} = styles
  return(
    <View style={startGameScreen}>
    <Text style={gameScreenTitleStyle}>
      {gameScreenTitle}
    </Text>
    <View style={inputContainer}>
      <Text>
        Select a number
      </Text>
      <TextInput />
      <View style={buttonContainer}>
        <Button title="Reset"/>
        <Button title="Confirm"/>
      </View>
    </View>
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
    // exclusive to android
    elevation: 8,
    padding: 20,
    borderRadius: 10,

    // exclusive styling for IOS
    shadowColor: 'black',
    shadowOffset: {width: 0, height:2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white'

  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default StartGame;