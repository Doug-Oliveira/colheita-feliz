import {StyleSheet} from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container:{
    width: '100%',
    height: 800,
    backgroundColor: "white"
  },

  menuTop:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: 15,
  },
  
  imageArea:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '30%'
  },

  inputsArea:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '30%',
  },
  
  input:{
    backgroundColor: "#F7F7F7",
    width: '85%',
    height: 57,
    marginBottom: '3%',
    padding: "5%",
    color: "#F7F7F7",
    fontSize: 15,
  },
  
  footerArea:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
  },

  button : {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20C3AF",
    width: '85%',
    height: "60%",
    color: "white",
  },

  textFooter:{
    color: "white",
    fontWeight: "bold"
  },

  sign_up:{
    color: theme.colors.sign_up_font
  },

  have_an_account:{
    color: theme.colors.forgot_password,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  }
  
});

export default styles