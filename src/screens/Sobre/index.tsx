import { TouchableOpacity, View, Image, Text } from "react-native";
import {styles} from './Sobre'

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}> 
                <Text style={styles.titulo1}>EASY</Text>
                <Text style={styles.titulo2}>COMPRAS</Text>
            </View>

            <View style={styles.containerConteudo}>
                <Text style={styles.titulo3}>Easy Compras - Simplificando o mundo das Compras</Text>

                <Text>
                    O Easy Compras é uma solução que auxilia a empresa a gerenciar suas compras e selecionar fornecedores. A ferramenta trata especificamente do processo de cotação e da seleção de fornecedores, que é a demanda fundamental apresentada pela empresa parceira (Level Group). Para atender a essa demanda, a Easy Compras armazena todas as solicitações e cotações de compra e usa um algoritmo de  Inteligência Artificial para sugerir a melhor cotação e fornecedor (ver seção "Inteligência Artificial no processo de compras"). 
                </Text>

            </View>
        </View>
    )
}