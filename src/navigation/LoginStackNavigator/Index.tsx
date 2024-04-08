import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroScreen from "screens/CadastroScreen";
import LoginScreen from "screens/LoginScreen";

const LoginStack = createNativeStackNavigator();

export default function LogiStacknScreen({ navigation }) {
  return (
    <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={LoginScreen}/>
        <LoginStack.Screen name="Registro" component={RegistroScreen}/>
    </LoginStack.Navigator>
  );
}
