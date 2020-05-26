import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = (props)=>
{ 
  return (
  <View style={{...styles.card, ...props.style}}>
   {props.children}
  </View>)

}

const styles = StyleSheet.create({
  card: {
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
  }
})

export default Card;
