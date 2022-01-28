import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';



export default function App() {

  const [input, setInput] = useState('');
  const [guidance, setGuidance] = useState('');

  const init = () => {
    setGuidance('Guess a number between 1-100');
    guesses = 0;
    secret = Math.floor(Math.random() * 100) + 1;
    console.log('Secret:', secret);
  }

  useEffect(() => {
    init();
  }, [])

  const makeGuess = () =>  {
    const guess = Number(input);
    console.log('Guess:', guess);
    guesses++;
    if (guess < secret) {
      setGuidance(`Your guess ${guess} is too low`);
    } else if (guess > secret) {
      setGuidance(`Your guess ${guess} is too high`)
    } else {
      Alert.alert(`You guessed the number in ${guesses} guesses`);
      init();
    }
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{guidance}</Text>
      <TextInput style={styles.input} value={input} keyboardType='number-pad' onChangeText={text => setInput(text)} />
      <Button onPress={makeGuess} title="MAKE GUESS" />
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