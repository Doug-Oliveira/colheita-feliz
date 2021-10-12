import React, {} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform} from "react-native";
import plant_card from '../../assets/planta.png';
import {styles} from './styles';
import { Card } from "react-native-paper";


export function Home(){
    
  return(
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } enabled>
        <View style={styles.container}>
        <Text style={styles.plantation_name}>
            Sr. Jorge
          </Text>
          <Text style={styles.plantation_title}>
            Umidade do Solo em: 26%
          </Text>
          <View style={styles.plantation_card}>
            <Image source={plant_card} 
            style={styles.image}
            resizeMode="stretch"/>
            <Text style={styles.plantation_information}>Alface</Text>
            <Text style={styles.last_irrigation}>Última irrigação: <Text style={styles.font_styled}>09/10/2021</Text></Text>
            <Text style={styles.last_irrigation}>Tipo: <Text style={styles.font_styled}>Manual</Text></Text>
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}> 
          <Text style={styles.text_btn}>
            Irrigar
          </Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
)};