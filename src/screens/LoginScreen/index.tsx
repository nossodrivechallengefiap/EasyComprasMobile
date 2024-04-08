import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./Login";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { HomeScreenNavigationProp } from "../../navigation/AppNavigator";
import { useUsuarios } from "../../context/UsuariosContext";
import Toast from "react-native-toast-message";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginStack = createNativeStackNavigator();

export default function LoginScreen({ navigation }) {
  // const navigation = useNavigation<HomeScreenNavigationProp>();

  const { usuarios } = useUsuarios();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    // Adicione aqui a lógica para lidar com o registro
    // Por exemplo, você pode validar os campos e fazer uma chamada à API para registrar o usuário
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      Toast.show({
        type: "success",
        position: "bottom",
        text1: `Bem-vindo de volta!`,
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });

      navigation.navigate("Home");

      setEmail("");
      setSenha("");
    } else {
      // Credenciais inválidas, exibe mensagem de erro
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Erro de Login",
        text2: "Credenciais inválidas. Verifique seu nome e senha.",
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });
    }
  };

  const handleLogar = () => {
    navigation.navigate("Registro");
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Text style={styles.titulo1}>EASY</Text>
          <Text style={styles.titulo2}>COMPRAS</Text>
        </View>

        <Text style={styles.titulo}>Login</Text>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />
        </View>
        <TouchableOpacity
          onPress={toggleMostrarSenha}
          style={styles.iconeSenha}
        >
          <Ionicons
            name={mostrarSenha ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.containerRegistrar}>
          <Text style={styles.logarText}>Não Possui Cadastro? </Text>
          <TouchableOpacity onPress={handleLogar}>
            <Text style={styles.logar}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
