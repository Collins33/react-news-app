import React from 'react';
import { View, StyleSheet, Text, Button, Image} from 'react-native';
import Card from '../card';
import Color from '../../constants/colors';

const GameOver = (props)=>
{
  const {screen, buttonContainer, inputContainer, image, imageContainer, gameText, gameTextSecondary} = styles;
  return(
  <View style={screen}>
      <Card style={inputContainer}>
        <Text style={gameText}>
          The game is over
        </Text>
        <View style={imageContainer}>
        <Image source={require('../../assets/original.png')} style={image}/>
        </View>
        <Text style={gameText}>
          Rounds taken:<Text style={gameTextSecondary}>{props.roundsTaken}</Text>
        </Text>
        <Text style={gameText}>
          Computer Guess:<Text style={gameTextSecondary}>{props.computerGuess}</Text>
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
  },
  imageContainer:{
    width:300,
    height: 300,
    borderRadius: 150,
    borderWidth:3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image:{
    width:'100%',
    height: '100%'
  },
  gameText:{
    fontFamily: 'open-sans-bold'
  },
  gameTextSecondary:{
    color: Color.special
  }
})

export default GameOver;