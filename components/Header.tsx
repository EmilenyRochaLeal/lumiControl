import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <View style={styles.header}>
                <Ionicons name="bulb-outline" size={32} color="#4A90E2" />
                <Text style={styles.title}>Ambiente Brilho</Text>
            </View >
            <Image source={require('@/assets/images/LuzLed.png')} style={styles.image} />
        </View >
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#4A90E2',
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 50,
    },
});

export default Header;