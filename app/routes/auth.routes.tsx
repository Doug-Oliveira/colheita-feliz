import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignOut } from '../screens/Signout'; 

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="SignOut"
        component={SignOut}
      />
    </Navigator>
  )
}