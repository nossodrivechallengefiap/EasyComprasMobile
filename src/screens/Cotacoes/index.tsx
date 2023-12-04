// MeusMedicamentos.tsx

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Cotacoes';

interface Produto {
    produto: string;
    fornecedor: string;
    valorUnitario: string;
    dataEntrega: string;
    dataCotacao: string;
}

export function Cotacoes() {

    const produtos = [
        {
            produto: 'Mouse Logitec',
            fornecedor: 'Intelli IA Tec',
            valorUnitario: 'R$120,00',
            dataEntrega: '31/12/2023',
            dataCotacao: '21/10/2023'
        },
        {
            produto: 'Teclado Logitec',
            fornecedor: 'Intelli IA Tec',
            valorUnitario: 'R$350,00',
            dataEntrega: '31/12/2023',
            dataCotacao: '21/10/2023'
        },
        {
            produto: 'Monitor',
            fornecedor: 'Intelli IA Tec',
            valorUnitario: 'R$1.700,00',
            dataEntrega: '31/12/2023',
            dataCotacao: '21/10/2023'
        },
    ]

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedMedicamento, setSelectedMedicamento] = useState<Produto | null>(null);   

    const renderItem = ({ item }: { item: Produto }) => (
        <View style={styles.medicamentoItem}>
        <View style={styles.bolinhaLaranja} />

        <Text style={styles.nomeMedicamento}>{item.produto}</Text>

        <View style={styles.iconContainer}>
            <TouchableOpacity
            style={styles.icon}
            onPress={() => {
                setSelectedMedicamento(item);
                setModalVisible(true);
            }}
            >
                <Icon name="eye" size={20} color="black" />
            </TouchableOpacity>

            {/* <TouchableOpacity
            style={styles.icon}
            onPress={() => {
                // Adicione a lógica para remover o medicamento
                removerMedicamento(item);
            }}
            >
            <Icon name="trash" size={20} color="red" />
            </TouchableOpacity> */}
        </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Text style={styles.titulo1}>EASY</Text>
                <Text style={styles.titulo2}>COMPRAS</Text>
            </View>

            <View style={styles.containerCotacoes}>
                {produtos.length === 0 ? (
                <Text>Nenhum medicamento cadastrado.</Text>
                ) : (
                <FlatList
                    data={produtos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderItem({ item })}
                />
                )}
            </View>
            <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Detalhes da Cotação</Text>
                    {selectedMedicamento && (
                    <>
                        <View style={styles.medItem}>
                            <Text>Produto:</Text>
                            <Text>{selectedMedicamento.produto}</Text>
                        </View>
                        <View style={styles.medItem}>
                            <Text>Fornecedor:</Text>
                            <Text>{selectedMedicamento.fornecedor}</Text>
                        </View>
                        <View style={styles.medItem}>
                            <Text>Valor Unitário:</Text>
                            <Text>{selectedMedicamento.valorUnitario}</Text>
                        </View>
                    
                    
                        <View style={styles.medItem}>
                            <Text>Data Entrega Prevista:</Text>
                            <Text>{selectedMedicamento.dataEntrega}</Text>
                        </View>
                    
                        <View style={styles.medItem}>
                            <Text>Data Cotação:</Text>
                            <Text>{selectedMedicamento.dataCotacao}</Text>
                        </View>
                    </>
                    )}
                    <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setModalVisible(false)}
                    >
                    <Text style={styles.modalCloseButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
