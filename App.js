import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header'
import StartGameScreen from './src/pages/startGameScreen';
import GameScreen from './src/pages/GameScreen';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {
  const [loaded] = useFonts({
    // OpenSans: require('-/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    OpenSansBold: require('./assets/fonts/static/OpenSans/OpenSans-Bold.ttf')
  });
  // if (!loaded) return <AppLoading />

  const [userNumber, setUserNumber] = useState() 

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }
  
  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if (userNumber) {
    content = <GameScreen />
  }
  
  return (
    <View style={styles.screen}>
      <Header title={'Adivina el numero'}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
