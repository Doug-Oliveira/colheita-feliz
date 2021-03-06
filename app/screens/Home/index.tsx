import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform} from "react-native";
import plant_card from '../../assets/planta.png';
import {styles} from './styles';
import { Checkbox, Colors, Modal, Portal, Provider, Button, TextInput } from "react-native-paper";
import { Component } from "react"; 

import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default class Home extends Component{

  example_state = false 

  constructor(props) {
    super(props);
    this.getData();
   
    this.funcao()
   
    this.state = {
      visible: false,
      checked: 'IA',
      
      text_input: "",
        teste: {plantingSituation:{          
          "namePlantation": "---",
          "typeOfIrrigation": "----",
          "PlantingSituation_typeOfIrrigation": "---",
          "PlantingSituation_moisture": "00.00",
          "PlantingSituation_IrrigationDate": "---"
        },
      }
    };

    this.second_state = {
      checked: this.state.teste.plantingSituation.PlantingSituation_typeOfIrrigation //aqui2
    }
  }

  
  //Refresh Irrigation Request
  async sendRequest() :Promise <JSON> {
    
    const response = await fetch('http://localhost:3213/platation/get-plantation', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "id": "e2a06b96-5c1b-486c-8e1e-f500d537c0d6"
      },
      body: JSON.stringify({
      })
    })
      .then(async res => {
        return res.json()
      })
      .then(data => {
        this.setState({teste: data})
        this.setState({checked: this.state.teste.plantingSituation.typeOfIrrigation})
        console.log(this.state.teste.plantingSituation.namePlantation)
        
      })
      .catch(error => console.log(error.message))
  }

  checked = false;
  visible = false;
  //request that sends information to enable automatic irrigation
  async sendIrrigationCheckMark(opt: String) :Promise <JSON> {
    
    const response = await fetch('http://localhost:3213/platation/toggle-typeIrrigation', {
      method: 'POST',
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
        console.log(this.state.teste.plantingSituation.PlantingSituation_IrrigationDate)
        
      })
      .catch(error => console.log(error.message))
  }

  //Manual irrigation
  async sendManualIrrigationRequest(percentage: String) :Promise <JSON> {
    
    const response = await fetch('http://192.168.0.45:3213/platation/activate-irrigation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
      ,
      body: JSON.stringify({
        "porcentagem": percentage,
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
      //console.log(opt)
      
      try{
        await AsyncStorage.setItem('checked', this.state.checked)
      }catch(err){
        console.log(err)
      }
    }

    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('checked')

        if (value !== null){
          this.setState({checked: value})
        }
      }catch(e){
        console.log(e)
      }
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
                <Text style={styles.plantation_title_content}>Umidade em: {parseFloat(this.state.teste.plantingSituation.PlantingSituation_moisture).toFixed(0)}%</Text>
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
                <Text style={styles.plantation_information}>{this.state.teste.plantingSituation.namePlantation}</Text>
                <Text style={styles.last_irrigation}>??ltima irriga????o: <Text style={styles.font_styled}>{this.state.teste.plantingSituation.PlantingSituation_IrrigationDate}</Text></Text>
                <Text style={styles.last_irrigation}>Tipo: <Text style={styles.font_styled}>{this.state.teste.plantingSituation.PlantingSituation_typeOfIrrigation}</Text></Text>
                <View style={styles.plantation_card_toggle}>
                  <Text style={styles.ia_text}>Ativar Automa????o
                  <Checkbox
                    checked={this.state.checked}
                    style={styles.checked}
                    color={Colors.green500}
                    uncheckedColor="#99A799"
                    status={this.state.checked == 'IA' ? 'checked' : 'unchecked'}
                    onPress={() => { 

                      console.log(this.state.checked)
                      if(this.state.teste.plantingSituation.typeOfIrrigation == 'Manual') this.setState({checked: 'IA'})
                      else this.setState({checked: 'Manual'})


                      //this.setState({this.state.checked = !this.state.checked})
                       //aqui

                       this.state.checked == 'IA' ? this.changeChebox(true) :this.changeChebox(false) 

                       this.funcao();
                        
                        //this.onPressCheckbox()
                      }
                    }
                  />
                  </Text>
                </View>
              </View>
              <Provider>
                <Portal>
                  <FlashMessage position="top" />
                  <Modal 
                    visible={this.state.visible} 
                    onDismiss={() =>{
                    this.setState({visible: this.state.visible})
                    }} 
                    contentContainerStyle={styles.modal}>
                    <Text style={styles.modal_text}>Seleciona a umidade desejada.</Text>
                    <TextInput
                      onChangeText={(text)=> {
                        this.setState({text_input: text})
                        const aux_params = this.state.text_input / 10
                      }}
                      mode="flat"
                      label="Nivel de umidade"
                    />
                    <TouchableOpacity style={styles.modal_btn} activeOpacity={0.7} 
                      onPress={ () =>{
                        console.log((this.state.text_input = this.state.text_input / 100).toFixed(2))
                        this.sendManualIrrigationRequest(this.state.text_input)
                        showMessage({
                          message: "Irrigado com Sucesso",
                          type: "success",
                          animationDuration: 600,
                          icon: "auto",
                        });
                      }}>
                      <Text style={styles.modal_text_btn}>
                        Ok
                      </Text>
                    </TouchableOpacity>
                  </Modal>
                </Portal>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7} 
                  onPress={ () =>{
                    this.setState({visible: !this.state.visible})
                  } }> 
                  <Text style={styles.text_btn}>
                    Irrigar
                  </Text>
                </TouchableOpacity>
              </Provider>
            </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  };  
};