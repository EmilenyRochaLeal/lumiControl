// import { StyleSheet, Text, View} from 'react-native';
// import { Link } from 'expo-router';

// export default function Configuracao() {
//   return (
//     <View>
//       <Text>Suas configurações</Text>
//       <Link href={"/notificacao"}>Ir para as notificações</Link>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
// });
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default AmbienteBrilho;
