import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform} from "react-native";
import plant_card from '../../assets/planta.png';
import {styles} from './styles';
import { Checkbox, Colors } from "react-native-paper";
import { Component } from "react"; 

import { MaterialCommunityIcons } from "@expo/vector-icons"


export default class Home extends Component{

  example_state = false 

  constructor(props) {
    super(props);
    this.second_state = {
      checked: false
    }
    this.state = {
      checked: false,
        teste: {PlantingSituation:{
          "namePlantation": "---",
          "typeOfIrrigation": "----",
          "PlantingSituation_typeOfIrrigation": "---",
          "PlantingSituation_moisture": "",
          "PlantingSituation_IrrigationDate": "---"
        }
      }
    };
  }

  
  //Manual Irrigation Request
  async sendRequest() :Promise <JSON> {
    
    const response = await fetch('http://localhost:3213/platation/get-plantation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'id': '2adacf76-d5b2-4673-9c2d-ea813f5a33b2'
 
      }
    })
      .then(async res => {
        return res.json()
      })
      .then(data => {
        this.setState({teste: data})
        console.log(this.state.teste)
        
      })
      .catch(error => console.log(error.message))
  }

  checked = false;
  //request that sends information to enable automatic irrigation
  async sendIrrigationCheckMark(opt: String) :Promise <JSON> {
    
    const response = await fetch('http://192.168.0.58:3213/platation/toggle-typeIrrigation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'id': 'e2a06b96-5c1b-486c-8e1e-f500d537c0d6'
      },
      body: JSON.stringify({
        typeOfIrrigation: opt,
      })
    })
      .then(async res => {
        return res.json()
      })
      .then(data => {
        this.setState({teste: data})
        console.log(this.state.teste)
        
      })
      .catch(error => console.log(error.message))
  }
    //Capture event button irrigation
    async funcao() :Promise <JSON>{
      const response = await this.sendRequest()

    }

    //Capture Checkbox params
    async changeChebox(opt: boolean) :Promise <JSON>{
      opt = opt ? "Manual" : "IA"
      await this.sendIrrigationCheckMark(opt)
      console.log(opt)
    }

  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } enabled>
            <View style={styles.container}>
            <Text style={styles.plantation_name}>
                Sr. Jorge
              </Text>
              <View style={styles.plantation_title}>
                <Text style={styles.plantation_title_content}>Umidade em: {this.state.teste.PlantingSituation.PlantingSituation_moisture}%</Text>
                <MaterialCommunityIcons 
                  style={styles.icon}
                  name="refresh-circle" 
                  size={42} 
                  color="#FEF5ED" 
                  onPress={ () => this.funcao()}/>
              </View>
              <View style={styles.plantation_card}>
                <Image source={plant_card} 
                style={styles.image}
                resizeMode="stretch"/>
                <Text style={styles.plantation_information}>{this.state.teste.PlantingSituation.namePlantation}</Text>
                <Text style={styles.last_irrigation}>Última irrigação: <Text style={styles.font_styled}>{this.state.teste.PlantingSituation.PlantingSituation_IrrigationDate}</Text></Text>
                <Text style={styles.last_irrigation}>Tipo: <Text style={styles.font_styled}>{this.state.teste.PlantingSituation.PlantingSituation_typeOfIrrigation}</Text></Text>
                <View style={styles.plantation_card_toggle}>
                  <Text style={styles.ia_text}>Ativar IA
                  <Checkbox
                    checked={this.state.checked}
                    style={styles.checked}
                    color={Colors.green500}
                    uncheckedColor="#99A799"
                    status={this.state.checked ? 'checked' : 'unchecked'}
                    onPress={() => { 
                      //this.setState({this.state.checked = !this.state.checked})
                        this.setState({checked: !this.state.checked})
                        this.changeChebox(this.state.checked)
                      }
                    }
                  />
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btn} activeOpacity={0.7} 
                onPress={ () => this.funcao()}> 
                <Text style={styles.text_btn}>
                  Irrigar
                </Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  };  
};