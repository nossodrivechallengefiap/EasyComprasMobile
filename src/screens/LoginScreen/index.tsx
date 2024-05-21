import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { styles } from "./Login";
import { Ionicons } from "@expo/vector-icons";
import { useUsuarios } from "../../context/UsuariosContext";
import Toast from "react-native-toast-message";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";

const LoginStack = createNativeStackNavigator();

export default function LoginScreen({ navigation }) {
  const { usuarios } = useUsuarios();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;

      await AsyncStorage.setItem("user", JSON.stringify(user));

      Toast.show({
        type: "success",
        position: "bottom",
        text1: `Bem-vindo de volta!`,
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });

      // Alert.alert("Bem-vindo de volta!");

      navigation.navigate("Home");
    } catch (error) {
      console.log("🚀 ~ handleLogin ~ error:", error);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Erro de Login",
        text2: error.message,
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
