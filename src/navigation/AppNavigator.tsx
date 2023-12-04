import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ToastMessage from 'react-native-toast-message';
import Login from '../screens/Login';
import Registro from '../screens/Cadastro';
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';
import { Cotacoes } from '../screens/Cotacoes';
import Contato from '../screens/Contato';
import ClientesCases from '../screens/ClientesCases';

type RootStackParamList = {
  Registro: undefined;
  Login: undefined;
  Home: undefined;
  SobreEasyCompras: undefined;
  Cotacoes: undefined;
  MeusMedicamentos: undefined;
  CameraScreen: undefined;
  CadDependente: undefined;
  Contato: undefined;
  ClienteCases: undefined;
};

export type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SobreEasyComprasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SobreEasyCompras'>;
export type CotacoesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cotacoes'>;
export type ClienteCasesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ClienteCases'>;


const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SobreEasyCompras" component={Sobre} />
        <Stack.Screen name="Cotacoes" component={Cotacoes} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="ClienteCases" component={ClientesCases} />
      </Stack.Navigator>
      <ToastMessage position="bottom" />
    </NavigationContainer>
  );
}

export default AppNavigator;
