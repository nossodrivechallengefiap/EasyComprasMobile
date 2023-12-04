import React, { useState } from  'react';
import { Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { styles } from './Cadastro';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RegistroScreenNavigationProp } from '../../navigation/AppNavigator';
import { UsuariosProvider, useUsuarios } from '../../context/UsuariosContext';
import Toast from 'react-native-toast-message';
import { CheckBox } from 'react-native-elements';

export default function Registro() {

    const navigation = useNavigation<RegistroScreenNavigationProp>();
    const { adicionarUsuario } = useUsuarios();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [ supervisor, setSupervisor ] = useState(false);
    const [dependente, setDependente] = useState<[]>([])

    const handleRegistro = () => {

        if (senha !== confirmarSenha) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Erro',
                text2: 'As senhas não coincidem',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
            });
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha,
            supervisor,
            dependente
        };


        adicionarUsuario(novoUsuario);

        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: `Parabens ${nome}! cadastro feito com sucesso`,
            visibilityTime: 3000, // Tempo que o toast ficará visível (em milissegundos)
            autoHide: true,
            topOffset: 50, // Distância do topo da tela
        });

        setNome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')

        navigation.navigate('Login');
    };

    const handleEntrar = () => {
        // Adicione aqui a lógica para navegar para a tela de login ou qualquer outra ação desejada
        // Por exemplo: 
        navigation.navigate('Login');
    };

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };
    const toggleMostrarConfirmarSenha = () => {
        setMostrarConfirmarSenha(!mostrarConfirmarSenha);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Registre-se</Text>

                <View>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

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
                <TouchableOpacity onPress={toggleMostrarSenha} style={styles.iconeSenha}>
                    <Ionicons
                        name={mostrarSenha ? 'eye-off' : 'eye'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>

                <View>
                    <Text style={styles.label}>Confirme a Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme a senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={!mostrarConfirmarSenha}
                    />
                </View>
                <TouchableOpacity onPress={toggleMostrarConfirmarSenha} style={styles.iconeConfirmarSenha}>
                    <Ionicons
                        name={mostrarConfirmarSenha ? 'eye-off' : 'eye'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.doisInputs}>
                    <View>
                        <Text style={styles.label}>CEP</Text>
                        <TextInput 
                            style={styles.inputEsquerda}
                            placeholder="CEP"
                            value={cep}
                            onChangeText={setCep}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Estado</Text>
                        <TextInput 
                            style={styles.inputDireita}
                            placeholder="UF"
                            value={uf}
                            onChangeText={setUf}
                        />
                    </View>
                </View>

                <View style={styles.doisInputs}>
                    <View>
                        <Text style={styles.label}>Logradouro</Text>
                        <TextInput 
                            style={styles.inputEsquerda}
                            placeholder="Logradouro"
                            value={logradouro}
                            onChangeText={setLogradouro}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Número</Text>
                        <TextInput 
                            style={styles.inputDireita}
                            placeholder="Nº"
                            value={numero}
                            onChangeText={setNumero}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.label}>Complemento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Complemento"
                        value={complemento}
                        onChangeText={setComplemento}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Bairro"
                        value={bairro}
                        onChangeText={setBairro}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value={cidade}
                        onChangeText={setCidade}
                    />
                </View>

                <TouchableOpacity style={styles.botao} onPress={handleRegistro}>
                    <Text style={styles.textoBotao}>Registrar-se</Text>
                </TouchableOpacity>

                <View style={styles.containerEntrar}>
                    <Text style={styles.entrarText}>Possui Cadastro?{' '}</Text>
                    <TouchableOpacity onPress={handleEntrar}>
                        <Text style={styles.entrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}