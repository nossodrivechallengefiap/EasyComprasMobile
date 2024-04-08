import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LogiStacknScreen from 'navigation/LoginStackNavigator/Index';
import HomeStacknScreen from 'navigation/HomeStackNavigator/Index';

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

// export type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
// export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
// export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
// export type SobreEasyComprasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SobreEasyCompras'>;
// export type CotacoesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cotacoes'>;
// export type ClienteCasesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ClienteCases'>;

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Início" component={HomeStacknScreen} options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='home' color={"#004014"} size={20}/>
              ),
            }} />
          <Tab.Screen 
            name="Entrar"
            component={LogiStacknScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='log-in' color={"#004014"} size={20}/>
              ),
            }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
