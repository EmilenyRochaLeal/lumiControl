import { StyleSheet, Text, View} from 'react-native';
import { Link } from 'expo-router';

export default function Configuracao() {
  return (
    <View>
      <Text>Suas configurações</Text>
      <Link href={"/notificacao"}>Ir para as notificações</Link>
    </View>
    
  );
}

const styles = StyleSheet.create({
});
