import React from 'react';
import { StyleSheet, Text, View, Switch, Button, Alert } from 'react-native';
// import * as Brightness from 'expo-brightness';
// import Slider from '@react-native-community/slider'; 
  
interface ConfigurationsProps {
    notificacoes: boolean;
    setNotificacoes: (value: boolean) => void;
    brilhoAutomatico: boolean;
    setBrilhoAutomatico: (value: boolean) => void;
    salvarConfiguracoes: () => void;
}

const Configurations: React.FC<ConfigurationsProps> = ({
    notificacoes,
    setNotificacoes,
    brilhoAutomatico,
    setBrilhoAutomatico,
    salvarConfiguracoes,
}) => {
    
    return (
        <View style={styles.configContainer}>

            <Text style={styles.configLabel}>Notificações de Luminosidade</Text>
            <Switch
                value={notificacoes}
                onValueChange={(value) => setNotificacoes(value)}
            />

            <Text style={styles.configLabel}>Brilho Automático</Text>
            <Switch
                value={brilhoAutomatico}
                onValueChange={(value) => setBrilhoAutomatico(value)}
            />

            <Button
                title="Salvar Configurações"
                onPress={salvarConfiguracoes}
                color="#4A90E2"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    configContainer: {
        marginVertical: 20,

    },
    configLabel: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff',
    },
});

export default Configurations;
