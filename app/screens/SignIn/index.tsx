import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform} from "react-native";
import { TextInput} from 'react-native-paper';
import logo_home from '../../assets/logo-home.png';
import {styles} from './styles';

import firebase from "../../config/firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons"

export function SignIn(){
{/*
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
 
  const loginFirebase = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      navigation.navigate('SignOut')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  useEffect(()=>{

  }, []);
*/}
  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } enabled>
        <ScrollView showsVerticalScrollIndicator={false} pagingEnabled>
        <Text style={styles.title}>
          Sign In
        </Text>
        <Image source={logo_home} 
          style={styles.image}
          resizeMode="stretch"
        />
        <TextInput style={styles.input_email}
        mode="flat"
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email} 
        />
        <TextInput style={styles.input_password}
        secureTextEntry={true}
        mode="flat"
        label="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        />
        {errorLogin === true 
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Invalid e-mail or password</Text>
        </View>
        :
        <View/>
        }
        <Text style={styles.forgot_password}>
          Forgot your password?
        </Text>
        { email === "" || password === ""
        ?
        <TouchableOpacity 
        style={styles.btn_login} 
        activeOpacity={0.7}
        disabled={true}
        >
          <Text style={styles.text_btn_login}>
            Login
          </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity 
        style={styles.btn_login} 
        activeOpacity={0.7}
        >
          <Text style={styles.text_btn_login}>
            Login
          </Text>
        </TouchableOpacity>
        }
        <Text style={styles.have_an_account}>
          Don’t have an account? <Text style={styles.sign_up} onPress={() => navigation.navigate('SignOut')}>Sign Up</Text>
        </Text>
        </ScrollView> 
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
