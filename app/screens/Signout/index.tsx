import React from 'react';
import { Text, View ,TextInput, Pressable,StatusBar,Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import smartFarm from '../../assets/smart-farm.png'

export function SignOut(){

  const navigation = useNavigation();

  return (
      <View style = {styles.container} >
        <StatusBar
        animated={true}
        backgroundColor="#61dafb"/>
      <View style = {styles.menuTop}>
        <Text>Sign Out</Text>
      </View>
        <View style = {styles.imageArea}>
        <Image source={smartFarm} />
      </View>
      <View style = {styles.inputsArea}>
        <TextInput style = {styles.input} 
        placeholder="Enter email"/>
        <TextInput style = {styles.input}
        placeholder="Enter password"/>
        <TextInput style = {styles.input}
        placeholder="Confirm password"/>  
      </View>
      <View style = {styles.footerArea}>
        <Pressable style= {styles.button} >
            <Text style = {styles.textFooter}>Sign Up</Text>
        </Pressable>
        <Text style={styles.have_an_account}>
          Already have an account? <Text style={styles.sign_up} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
}
