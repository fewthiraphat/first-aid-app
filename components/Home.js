import * as React from 'react';
import { Text, View, StyleSheet , Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Box from './Box'

export default function Home() {
  return (
     <View style={styles.container}>
        <Image style={styles.logoImage} source={require('./medical.jpg')}/>
        <Text style={styles.paragraph}>
          กล่องปฐมพยาบาล
        </Text>
    <Box/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardrow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  cardrow2:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  logoImage:{
    width:'100%',
    height:'30%'
  }
});