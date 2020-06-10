import React, {useState, useRef, useEffect} from 'react';
import { View, StyleSheet, Text, Button, Alert, ScrollView} from 'react-native';
import Card from '../card';
const generateRandomNumber=(min, max, exclude)=>
{
  // round off to the next largest value
  min = Math.ceil(min);
  // return the largest int less than the passed value
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude)
  {
    return generateRandomNumber(min, max, exclude)
  }else{
    return randomNumber
  }
}

const generateList=(value, round)=>(
  <View key={round+1} style={styles.listItem}>
      <Text>COMPUTER GUESS:</Text>
      <Text>{value}</Text>
  </View>
)

const PlayGame = (props)=>
{
  const initialGuess = generateRandomNumber(1, 99, props.userChoice)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [pastGuesses, setPastGuesses]=useState([initialGuess])
  useEffect(()=>{
    if(currentGuess === props.userChoice)
    {
      props.setGameOver(true)
      props.setComputerGuess(currentGuess)
    }
  })
  // useRef ensures that we do not
  // rerender the component when the values change
  const currentLow = useRef(1);
  const currentHigh = useRef(100)
  const {container, buttonContainer, listContainer} = styles;
  const nextGuessHandler = direction=>
  {
    if((direction === 'lower' && props.userChoice > currentGuess)||(direction === 'greater' && props.userChoice < currentGuess)){
      Alert.alert('Do not lie', 'Make sure you choose the correct button', [{title: 'Sorry!', style: 'cancel'}]);
      return;
    }
    if(direction === 'lower')
    {
      // if the guess is lower,
      // the max value should be the previous guess
      currentHigh.current = currentGuess+1
    }else{
      // if the guess is higher,
      // the minimum value should be the current guess
      currentLow.current = currentGuess
    }
    
    // generate the new guess
    const newGuess = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
    // set state with the new value
    setCurrentGuess(newGuess)
    setPastGuesses(currGuess=>[newGuess, ...currGuess])
    props.setRounds(pastGuesses.length);
  }
  return (
  <View style={container}>
    <Text>
     Computer guess
     {currentGuess}
    </Text>
    <Card style={buttonContainer}>
      <Button title="LOWER" onPress={()=>{nextGuessHandler('lower')}}/>
      <Button title="HIGHER" onPress={()=>{nextGuessHandler('greater')}}/>
    </Card>
    <View stye={listContainer}>
    <ScrollView>
      {pastGuesses.map(guess=>(
        generateList(guess, pastGuesses.length)
      ))}
    </ScrollView>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
  },
  listContainer:{
    width: '80%',
    flex: 1
  },
  listItem:{
    borderColor:'#ccc',
    borderWidth:1,
    padding:15,
    marginVertical:10,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent: 'space-around'
  }

})

export default PlayGame;