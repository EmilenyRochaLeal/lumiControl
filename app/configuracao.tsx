import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '@/components/Header';
import BrightnessControl from '@/components/BrightnessControl';
import Configurations from '@/components/Configuration';


const AmbienteBrilho = () => {
    const [brilho, setBrilho] = useState(50);
    const [notificacoes, setNotificacoes] = useState(false);
    const [brilhoAutomatico, setBrilhoAutomatico] = useState(false);

    const salvarConfiguracoes = () => {
        console.log('Configurações salvas:', {
            brilho,
            notificacoes,
            brilhoAutomatico,
        });
    };

    return (
        <View style={styles.container}>
            <Header />
            <BrightnessControl brilho={brilho} setBrilho={setBrilho} />
            <Text style={[styles.brilhoText, { color: brilho > 50 ? 'orange' : 'blue' }]}>
                {brilho}%
            </Text>
            <Configurations
                notificacoes={notificacoes}
                setNotificacoes={setNotificacoes}
                brilhoAutomatico={brilhoAutomatico}
                setBrilhoAutomatico={setBrilhoAutomatico}
                salvarConfiguracoes={salvarConfiguracoes}
            />
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingTop: 5,
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    brilhoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff8c00', 
        textAlign: 'center',
        marginTop: 10,
    },
});

export default AmbienteBrilho;
