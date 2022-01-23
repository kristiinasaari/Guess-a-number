import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const buttonPressed = () => { 
    Alert.alert('You typed: ' + text); 
  };

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text}/>
      <Button onPress={buttonPressed} title="MAKE GUESS" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }
});