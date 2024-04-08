import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    containerLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 20
    },
    containerEmpresa: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    titulo1: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#7F7F80'
    },
    nomeEmpresa: {
        fontSize: 25,
    },
      titulo2: {
        fontSize: 35,
        marginBottom: 20,
        color: '#3B7C24'
    },
    titulo3: {
        fontSize: 35,
        fontWeight: 'bold',
        top: -80,
    },
    containerConteudo: {
        padding: 30
    },
    imagemEmpresa: {
        width: 100,
        height: 100,
    },
    imagemEmpresa2: {
        marginRight: 20
    },
    imagemEmpresa3: {
        marginRight: 55
    },
})