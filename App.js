import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PlayScreen from './src/PlayScreen'
//import PlayScreen from './PlayScreen';


export default function App() {
  //here we are making a state
const [play, setplay] = useState(false)
  return (
    // ternary operator used below
    play ? (   <PlayScreen/>):(
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={{fontSize:80}}>✊ ✋ ✌️</Text>
      <View style={styles.button}>
      <Button title="Play" onPress={()=>setplay(true)}/>
      {/* <Button title="Play" onPress={setplay(true)}/> if we will not arrow function here the onpress will be called automatically so we need to add as above*/}
      </View>
    
      <StatusBar style="auto" />
    </View>
    )
  );
}
//for syling we do down editing 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:60,
    marginBottom:10,
  },
  button:{
    fontSize:60,
    marginTop:20,
    width:400,
  }
});

