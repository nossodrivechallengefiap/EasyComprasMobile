import React from "react";
import { UsuariosProvider } from "context/UsuariosContext";
import TabNavigator from "navigation/TabNavigator/Index";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <UsuariosProvider>
      <TabNavigator />
      <Toast />
    </UsuariosProvider>
  );
}
