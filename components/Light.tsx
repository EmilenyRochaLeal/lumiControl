import { LightSensor } from 'expo-sensors';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Alert } from 'react-native';

export default function Light() {
    const [isAvailable, setIsAvailable] = useState(false);
    const [lightValue, setLightValue] = useState(null);

    useEffect(() => {
        // Verificar a disponibilidade do sensor de luz
        const checkSensorAvailability = async () => {
            if (Platform.OS === 'android') {
                const available = await LightSensor.isAvailableAsync();
                setIsAvailable(available);
                if (available) {
                    Alert.alert('Sensor de Luz', 'O sensor de luz está disponível!');
                }
            } else {
                setIsAvailable(false); // Sensor não disponível no iOS
            }
        };
        checkSensorAvailability();
    }, []);

    useEffect(() => {
        if (isAvailable) {
            const subscription = LightSensor.addListener(data => {
                setLightValue(data.illuminance);
                console.log('Luminosidade do ambiente:', data.illuminance);
            });

            return () => subscription && subscription.remove();
        }
    }, [isAvailable]);

    return (
        <View style={styles.container}>
            <Text>Sensor de Luz:</Text>
            <Text>{isAvailable ? 'Disponível' : 'Não disponível'}</Text>
            {isAvailable && lightValue !== null && (
                <Text>Luminosidade: {lightValue.toFixed(2)} lx</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
