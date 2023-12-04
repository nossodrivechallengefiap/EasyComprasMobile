import { UsuariosProvider } from './src/context/UsuariosContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <UsuariosProvider>
      <AppNavigator/>
    </UsuariosProvider>
  );
}