import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
    <ImageBackground source={require("./assets/fon.jpg")} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.paragraph}
      >
       Yoho Game!
      </Text>
    </View>
    <View style = {styles.but}>
      <Button 
        style = {styles.but}
        title="Play"
        color="#841584"
        accessibilityLabel="Play!"
      />
      <Button 
        title="Privacy Policy"
        color="#841584"
        accessibilityLabel="Play!"
      />
      <Button
        title="Clear Progress"
        color="#841584"
        accessibilityLabel="Play!"
      />
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: 10,
    padding: 8,
    fontSize: 50,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFFFFF",
  },
  but:{
    paddingTop: 0,
    color:"#FFFFFF",
    backgroundColor: "#A518F0",
    borderRadius: "20px",
    width: 300,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  safe:{
    flex:1,
  },
});
