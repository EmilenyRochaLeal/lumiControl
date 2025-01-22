import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}>
            <Ionicons name="bulb-outline" size={32} color="#4A90E2" />
            <Text style={styles.title}>Ambiente Brilho</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#4A90E2',
    },
});

export default Header;