import { LightSensor } from 'expo-sensors';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Light() {
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        // Verificar a disponibilidade do sensor de luz
        const checkSensorAvailability = async () => {
            if (Platform.OS === 'android') {
                const available = await LightSensor.isAvailableAsync();
                setIsAvailable(available);
            } else {
                setIsAvailable(false); // Sensor não disponível no iOS
            }
        };
        checkSensorAvailability();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Sensor de Luz:</Text>
            <Text>{isAvailable ? 'Disponível' : 'Não disponível'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
