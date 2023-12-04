import React, { useState } from  'react';
import {styles} from './Contato'
import { Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/AppNavigator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


export default function Contato() {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const [ email, setEmail] = useState('');
    const [ mensagem, setMensagem ] = useState('');

    const handleLogin = () => {
        if( email !== '' && mensagem !== ''){

            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: `Mensagem Enviada com sucesso!`,
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
            });
            navigation.navigate('Home');
        }else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: `Atenção! Preencha todos os campos`,
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
            });
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}> 
                <Text style={styles.titulo1}>EASY</Text>
                <Text style={styles.titulo2}>COMPRAS</Text>
            </View>

            <View style={styles.containerConteudo}>
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                >

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
                    <Text style={styles.label}>Mensagem</Text>
                    <TextInput
                        style={styles.input2}
                        placeholder="Informe sua dúvida"
                        value={mensagem}
                        onChangeText={setMensagem}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>

                </KeyboardAvoidingView>
                
                <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}