import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./HomeScreen";
// import { CotacoesScreenNavigationProp } from "../../navigation/AppNavigator";
import Modal from "react-native-modal";


export default function HomeScreen({ navigation }) {
  // const navigation = useNavigation<CotacoesScreenNavigationProp>();

  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonPress = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      navigation.navigate("SobreEasyCompras");
    } else if (buttonNumber === 2) {
      navigation.navigate("Cotacoes");
    } else if (buttonNumber === 3) {
      navigation.navigate("Contato");
    } else if (buttonNumber === 4) {
      navigation.navigate("ClienteCases");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.titulo1}>EASY</Text>
        <Text style={styles.titulo2}>COMPRAS</Text>
      </View>

      <View style={styles.botoesContainer}>
        {/* Botão 1 */}
        <View style={styles.botaoWrapper}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleButtonPress(1)}
          >
            <Image
              source={require("../../assets/images/lente.png")}
              style={styles.imagemBotao}
            />
          </TouchableOpacity>
          <Text style={styles.textoBotao}>Sobre EasyCompras</Text>
        </View>

        {/* Botão 2 */}
        <View style={styles.botaoWrapper}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleButtonPress(2)}
          >
            <Image
              source={require("../../assets/images/cotacao.png")}
              style={styles.imagemBotao}
            />
          </TouchableOpacity>
          <Text style={styles.textoBotao}>Cotações</Text>
        </View>
      </View>

      <View style={styles.botoesContainer}>
        {/* Botão 3 */}
        <View style={styles.botaoWrapper}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleButtonPress(3)}
          >
            <Image
              source={require("../../assets/images/contato.png")}
              style={styles.imagemBotao}
            />
          </TouchableOpacity>
          <Text style={styles.textoBotao}>Contato</Text>
        </View>

        {/* Botão 3 */}
        <View style={styles.botaoWrapper}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleButtonPress(4)}
          >
            <Image
              source={require("../../assets/images/parceria.png")}
              style={styles.imagemBotao}
            />
          </TouchableOpacity>
          <Text style={styles.textoBotao}>Clientes/Cases</Text>
        </View>
      </View>
    </View>
  );
}
