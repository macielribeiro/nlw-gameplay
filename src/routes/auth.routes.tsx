import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Background } from "../componentes/Background";

type AuthStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="SignIn"
        component={() => (
          <Background>
            <SignIn />
          </Background>
        )}
      />
      <Stack.Screen
        name="Home"
        component={() => (
          <Background>
            <Home />
          </Background>
        )}
      />
    </Stack.Navigator>
  );
}
