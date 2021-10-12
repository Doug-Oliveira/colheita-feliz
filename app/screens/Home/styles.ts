import {StyleSheet} from 'react-native';
import { shadow } from 'react-native-paper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container:{
    position: 'relative',
    width:'100%',
    height:'40%',
    backgroundColor: '#55e6c9',
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
    backgroundColor: "#fa9d23",
    width: 350,
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

  last_irrigation:{
    marginLeft: 140,
    fontSize: 14,
    marginTop: 11,
    color: "#b0b0b0",
    fontWeight: "bold"
  
  },

  font_styled:{
    color: "#82de26",
  },

  plantation_card:{
    alignSelf: "center",
    width: 355,
    height: 220,
    marginTop: 70,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#8c8c8c',
    shadowRadius: 10,
  },

  image:{
    width: 100,
    height: 90,
    marginLeft: 18,
    top: 60
  },

  btn:{
    alignSelf: "center",
    marginTop: 80,
    width: 350,
    height: 69,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text_btn:{
    fontSize: 30,
    color: theme.colors.font_light,
    fontWeight: "bold"
  },
});