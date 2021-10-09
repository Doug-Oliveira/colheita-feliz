import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',

  },
  
  title: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    marginTop: 60,
    color: theme.colors.font
  },

  image: {
    width: 170,
    height: 150,
    top: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input_email:{
    width: 350,
    height: 69,
    marginTop: 150,
  },

  input_password:{
    width: 350,
    height: 69,
    marginTop: 25,
  },

  btn_login:{
    marginTop: 5,
    width: 350,
    height: 69,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text_btn_login:{
    fontSize: 16,
    color: theme.colors.font_light,
    fontWeight: "bold"
  },

  forgot_password:{
    color: theme.colors.forgot_password,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 13,
    marginBottom: 40,
    marginLeft: 160
  },

  sign_up:{
    color: theme.colors.sign_up_font
  },

  have_an_account:{
    color: theme.colors.forgot_password,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },

  contentAlert:{
    marginTop: 20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center"
  },

  warningAlert:{
    paddingLeft: 10,
    color: "#bdbdbdbd",
    fontSize: 16
  }
  

});