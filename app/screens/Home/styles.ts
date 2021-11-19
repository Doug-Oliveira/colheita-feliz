import {StyleSheet} from 'react-native';
import { shadow } from 'react-native-paper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container:{
    position: 'relative',
    width:'100%',
    height:'65%',
    backgroundColor: '#D3E4CD',
  },

  information:{
    flexDirection: 'row',
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "normal"
  },

  plantation_name:{
    flexDirection: 'row',
    textAlign: 'left',
    marginLeft: 28,
    fontSize: 30,
    marginTop: 65,
    color: "#ffffff",
    fontWeight: "bold"
  },

  plantation_title:{
    flexDirection: 'row',
    fontSize: 20,
    marginTop: 40,
    backgroundColor: "#99A799",
    width: 350,
    marginLeft: 10,
    height: 68,
    padding:20,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 25,
    color: "#ffffff",
    fontWeight: "bold"
  },

  plantation_information:{
    marginLeft: 145,
    fontSize: 30,
    position: "absolute",
    marginTop: "13%",
    color: "#a1a1a1",
    fontWeight: "bold",
    
  },
  plantation_title_content:{
    flexDirection: 'row',
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold"
  },

  checked:{
    backgroundColor:"black"
  },

  last_irrigation:{
    marginLeft: 140,
    fontSize: 14,
    marginTop: 11,
    color: "#b0b0b0",
    fontWeight: "bold"
  
  },

  modal_text:{
    fontSize: 16,
    marginBottom: 20,
    color: "#b0b0b0",
    fontWeight: "bold"
  
  },

  font_styled:{
    color: "#82de26",
    fontWeights: "600"
  },

  plantation_card:{
    alignSelf: "center",
    width: 355,
    height: 220,
    marginTop: 70,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FEF5ED',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#8c8c8c',
    shadowRadius: 10,
  },

  plantation_card_toggle:{
    alignSelf: "center",
    width: 170,
    height: 60,
    marginTop: 90,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FEF5ED',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#8c8c8c',
    shadowRadius: 10,
    flexDirection: 'row'
  },

  image:{
    width: 100,
    height: 90,
    marginLeft: 18,
    top: 60
  },
  icon: {
    marginLeft: 90,
    marginTop: -5,
  },

  ia_text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 17,
    color: "#b0b0b0",
    fontWeight: "bold"
  },

  modal:{
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
    width: 400,
    height: 300,
    
  },

  btn:{
    alignSelf: "center",
    marginTop: 140,
    width: 350,
    height: 69,
    borderRadius: 4,
    backgroundColor: "#99A799",
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal_btn:{
    alignSelf: "center",
    width: 100,
    height: 50,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: "#99A799",
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal_text_btn:{
    fontSize: 17,
    color: theme.colors.font_light,
    fontWeight: "bold"
  },

  text_btn:{
    fontSize: 30,
    color: theme.colors.font_light,
    fontWeight: "bold"
  },
});