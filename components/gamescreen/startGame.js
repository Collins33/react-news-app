import React from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from '../card';
import Colors from '../../constants/colors';

const StartGame = ({gameScreenTitle})=>
{
  const {startGameScreen, gameScreenTitleStyle, buttonContainer, inputContainer, buttonStyle} = styles
  const {primaryColor, secondaryColor} = Colors;
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
        <View style={buttonStyle}><Button title="Reset" color={primaryColor}/></View>
        <View style={buttonStyle}><Button title="Confirm" color={secondaryColor}/></View>
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
  },
  buttonStyle:{
    width: '40%'
  }
})

export default StartGame;