import { StyleSheet, Text, View} from 'react-native';
import { Link } from 'expo-router';

export default function Configuracao() {
  return (
    <View>
      <Text>Suas notificaçãoes</Text>
      <Link href={"/configuracao"}>Ir para as configurações</Link>
    </View>
    
  );
}

const styles = StyleSheet.create({

});
