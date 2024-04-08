import { View, Text } from "react-native";
import {styles} from './ClientesCasesScreen'
import { Image } from "react-native-elements";
import React from "react";

export default function ClientesCasesScreen() {
    const empresasFicticias = [
        "TechVision Solutions",
        "InovaCorp Services",
        "EcoFutura Innovations",
        "DigitalPulse Technologies",
        "FutureSync Solutions"
    ];
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={styles.titulo1}>EASY</Text>
                <Text style={styles.titulo2}>COMPRAS</Text>
            </View>

            <Text style={styles.titulo3}>Empresas Parceiras</Text>

            <View style={styles.containerEmpresa}>
                <Image source={require('../../assets/images/emp1.jpg')} style={[styles.imagemEmpresa, styles.imagemEmpresa3 ]} />
                <Text style={[styles.titulo1, styles.nomeEmpresa]}>QUILL PEN</Text>
            </View>
            <View style={styles.containerEmpresa}>
                <Image source={require('../../assets/images/emp2.jpg')} style={[styles.imagemEmpresa, styles.imagemEmpresa2 ]} />
                <Text style={[styles.titulo1, styles.nomeEmpresa]}>THE EXAGON</Text>
            </View>
            <View style={styles.containerEmpresa}>
                <Image source={require('../../assets/images/emp3.jpg')} style={[styles.imagemEmpresa, styles.imagemEmpresa2 ]} />
                <Text style={[styles.titulo1, styles.nomeEmpresa]}>DIGITAL TECH</Text>
            </View>
        </View>
    )
}