import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
const {primaryColor} = Colors;
const Header =({title})=>
{
  const {headerComponent, headerContent}=styles;
  return (
    <View style={headerComponent}>
      <Text style={headerContent}>
        {title}
      </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  headerComponent:{
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContent:{
    fontSize: 18,
    color: 'black'
  }
})

export default Header;