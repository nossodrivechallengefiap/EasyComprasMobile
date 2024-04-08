import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroScreen from "screens/CadastroScreen";
import LoginScreen from "screens/LoginScreen";
import Sobre from "screens/SobreScreen";
import SobreScreen from "screens/SobreScreen";
import HomeScreen from "screens/HomeScreen";
import { CotacoesScreen } from "screens/CotacoesScreen";
import ContatoScreen from "screens/ContatoScreen";
import ClientesCasesScreen from "screens/ClientesCasesScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStacknScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="SobreEasyCompras" component={SobreScreen}/>
        <HomeStack.Screen name="Cotacoes" component={CotacoesScreen}/>
        <HomeStack.Screen name="Contato" component={ContatoScreen}/>
        <HomeStack.Screen name="ClienteCases" component={ClientesCasesScreen}/>
    </HomeStack.Navigator>
  );
}
