import React from "react";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform} from "react-native";
import { TextInput} from 'react-native-paper';
import logo_home from '../../assets/logo-home.png';
import {styles} from './styles';

export function SignIn(){
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
        />
        <TextInput style={styles.input_password}
        mode="flat"
        label="Password"
        />
        <Text style={styles.forgot_password}>
          Forgot your password?
        </Text>
        <TouchableOpacity style={styles.btn_login} activeOpacity={0.7}>
          <Text style={styles.text_btn_login}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.have_an_account}>
          Don’t have an account? <Text style={styles.sign_up}>Sign Up</Text>
        </Text>
        </ScrollView> 
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
