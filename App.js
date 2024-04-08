import React from 'react';
import { UsuariosProvider } from 'context/UsuariosContext';
import TabNavigator from 'navigation/TabNavigator/Index';




export default function App() {
  return (
    <UsuariosProvider>
      <TabNavigator/>
    </UsuariosProvider>
  );
}