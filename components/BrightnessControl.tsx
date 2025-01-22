import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';


interface BrightnessControlProps {
    brilho: number;
    setBrilho: (value: number) => void;
}

const BrightnessControl: React.FC<BrightnessControlProps> = ({ brilho, setBrilho }) => {
    return (
        <View>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                value={brilho}
                onValueChange={(value) => setBrilho(value)}
                minimumTrackTintColor="#4A90E2"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#4A90E2"
            />
            <Text style={styles.brightnessText}>{`${Math.round(brilho)}%`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    slider: {
        width: '100%',
        height: 40,
        marginBottom: 10,
    },
    brightnessText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default BrightnessControl;
