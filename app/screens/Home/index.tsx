import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform, Switch} from "react-native";
import plant_card from '../../assets/planta.png';
import {styles} from './styles';
import { Card } from "react-native-paper";
import { Component } from "react"; 

export default class Home extends Component{
  /*
  const [isEnabled: object, setIsEnabled: object] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }
  */
  constructor(props) {
    super(props);
    this.state = {
        teste: {PlantingSituation:{
          "namePlantation": "ortaliça",
          "typeOfIrrigation": "NULL",
          "PlantingSituation_typeOfIrrigation": "M",
          "PlantingSituation_moisture": 14,
          "PlantingSituation_IrrigationDate": "2021/08/19"
        }
      }
    };
  }
  
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

    async funcao() :Promise <JSON>{
      const response = await this.sendRequest()

    }

  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } enabled>
            <View style={styles.container}>
            <Text style={styles.plantation_name}>
                Sr. Jorge
              </Text>
              <Text style={styles.plantation_title}>
                Umidade: {this.state.teste.PlantingSituation.PlantingSituation_moisture}%
              </Text>
              <View style={styles.plantation_card}>
                <Image source={plant_card} 
                style={styles.image}
                resizeMode="stretch"/>
                <Text style={styles.plantation_information}>{this.state.teste.PlantingSituation.namePlantation}</Text>
                <Text style={styles.last_irrigation}>Última irrigação: <Text style={styles.font_styled}>{this.state.teste.PlantingSituation.PlantingSituation_IrrigationDate}</Text></Text>
                <Text style={styles.last_irrigation}>Tipo: <Text style={styles.font_styled}>{this.state.teste.PlantingSituation.PlantingSituation_typeOfIrrigation}</Text></Text>
                <View style={styles.plantation_card_toggle}>
                  <Text style={styles.ia_text}>Ativar IA</Text>
 
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