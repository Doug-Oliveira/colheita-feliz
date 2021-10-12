import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignOut } from '../screens/Signout'; 
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
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