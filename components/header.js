import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


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
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContent:{
    fontSize: 18,
    color: 'black'
  }
})

export default Header;