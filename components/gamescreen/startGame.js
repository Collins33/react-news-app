import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../card';
import Colors from '../../constants/colors';
import Input from '../../components/input';
const StartGame = ({gameScreenTitle, getUserInput})=>
{
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmation] = useState(false)
  const [confirmedValue, setConfirmedValue] = useState()
  const updateInputValue=inputText=>
  {
     setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler=()=>{
    setEnteredValue('')
    setConfirmation(false)
  }

  const confirmInputHandler=()=>{
    const confirmationValue = parseInt(enteredValue);
    if( isNaN(confirmedValue)  || confirmedValue <=0 || confirmedValue>99)
    {
      Alert.alert('Invalid input', 'Value entered must be a value between 1 and 99', [{title: 'Okay', style: 'destructive', onPress:resetInputHandler}])
    }
    setConfirmedValue(confirmationValue);
    setEnteredValue('')
    setConfirmation(true)
    Keyboard.dismiss()
  }
  const {
    startGameScreen, 
    gameScreenTitleStyle, 
    buttonContainer, 
    inputContainer, 
    buttonStyle, 
    inputField, 
    confirmationCard
  } = styles
  const {primaryColor, secondaryColor} = Colors;

  let confirmedOutput;
  if (confirmed) 
  {
    confirmedOutput = 
    <Card style={confirmationCard}>
      <Text>Chosen number: {confirmedValue}</Text>
      <Button title="Start game" onPress={()=>getUserInput(confirmedValue)}/>
    </Card>
  }
  return(
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={startGameScreen}>
    <Text style={gameScreenTitleStyle}>
      {gameScreenTitle}
    </Text>
    <Card style={inputContainer}>
      <Text>
        Select a number
      </Text>
      <Input 
         style={inputField}
         autoCapitalize='none' 
         keyboardType='number-pad' 
         maxLength={2}
         onChangeText={updateInputValue}
         value={enteredValue}
      />
      <View style={buttonContainer}>
        <View style={buttonStyle}><Button title="Reset" color={primaryColor} onPress={resetInputHandler}/></View>
        <View style={buttonStyle}><Button title="Confirm" color={secondaryColor} onPress={confirmInputHandler}/></View>
      </View>
    </Card>
    {confirmedOutput}
   </View>
   </TouchableWithoutFeedback>
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
  },
  inputField:{
    width: '50%',
  },
  confirmationCard:{
    marginVertical: 25
  }
})

export default StartGame;