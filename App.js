import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedbackBase } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to IOS Music Player</Text>
      <View style={styles.title}><Text style={styles.titletext}>Music Player</Text></View>
      <View style={styles.song1}><Text style={styles.playtext}>Song 1: Play</Text></View>
      <View style={styles.song1}><Text style={styles.playtext}>Song 2: Play</Text></View>
      <View style={styles.song2}><Text style={styles.playingtext}>Song 3: Playing</Text></View>
      <View style={styles.song1}><Text style={styles.playtext}>Song 4: Play</Text></View>
      <View style={styles.song1}><Text style={styles.playtext}>Song 5: Play</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },

  titletext: {
    fontSize: 25,
    fontFamily: 'Roboto',
    color: '#daa520',
  },

  song1: {
    flexDirection: "row",
    flex: 1,
    height: 100,
    width: 200,
    backgroundColor: '#00ffff',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#ff4500',
    borderRadius: 10,
  },

  song2: {
    flexDirection: "row",
    flex: 1,
    height: 100,
    width: 200,
    backgroundColor: '#00008b',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#ff4500',
    borderRadius: 10,
  },
  
  playingtext: {
    color: '#ffffff',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20
  },

  playtext: {
    color: '#000000',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20
  }


  

  
});
