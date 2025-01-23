import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LightSensor } from 'expo-sensors';

export default function MessageComponent() {
  const [illuminance, setIlluminance] = useState(0);
  const [message, setMessage] = useState('');
  const [subscription, setSubscription] = useState(null);

  const updateMessage = (illuminance) => {
    if (illuminance > 100) {
      setMessage('Que dia lindo! Aproveite para tomar um café.');
    } else if (illuminance <= 50) {
      setMessage('Esse dia está acabando. Aproveite para ter uma noite tranquila.');
    }
  };

  useEffect(() => {

    const checkSensor = async () => {
      const available = await LightSensor.isAvailableAsync();
      if (!available) {
        setMessage('Sensor de luz não está disponível no dispositivo.');
        return;
      }

      
      const listener = LightSensor.addListener(({ illuminance }) => {
        setIlluminance(illuminance);
        updateMessage(illuminance);
      });

      setSubscription(listener);
    };

    checkSensor();

  
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [subscription]);

  useEffect(() => {
    LightSensor.setUpdateInterval(3000);
  }, []);

  return (
    <View style={styles.message}>
      <Text style={styles.messageText}>{message}</Text>
      {/* {illuminance !== null && (
        <Text style={styles.messageText}>Luz ambiente: {illuminance.toFixed(2)} lx</Text>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#000',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  messageText: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
});
