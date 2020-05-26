import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

const Input = (props)=>
{
  const {inputField} = styles;
  return(
    <TextInput {...props} style={{...inputField, ...props.style}}/>
  )

}

const styles = StyleSheet.create({
  inputField:{
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: 'center'
  }
})

export default Input;