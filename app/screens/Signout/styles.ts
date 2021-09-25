import {StyleSheet} from 'react-native'


export const stylesSignout = StyleSheet.create({

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


          }
        
    

});

export default stylesSignout