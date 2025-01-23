import { StyleSheet, Text, View} from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

export default function Configuracao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LuminControl</Text>
      <View style={styles.coluna}>
        <Text style={styles.textoT}>Você sabia?</Text>
        <Text style={styles.texto}><Feather name="sun" size={29} color="#4A90E2"/>   Ouvir ou ler frases motivacionais pode transformar o seu dia {'\n'}</Text>
        <Text style={styles.texto}><FontAwesome5 name="flag-checkered" size={29} color="#4A90E2"/>   Mensagens motivacionais ajudam a redefinir o mindset, aumentando o foco em metas e tarefas. {'\n'}</Text>
        <Text style={styles.texto}><Ionicons name="happy-outline" size={29} color="#4A90E2"/>   Ajuda a aumentar a confiança e melhorar a autoestima {'\n'}</Text>
      </View>
      <Text style={styles.textoU}>"Nada melhor do que um dia após o outro!"</Text>
      <View style={styles.linkContainer}>
        <Link href={"/"} style={styles.link}><Entypo name="home" size={26} color="#4A90E2" />{"\n"}Home</Link>
        <Link href={"/configuracao"} style={styles.link}><Ionicons name="settings" size={24} color="#4A90E2" />{"\n"}Configurações</Link>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      padding: 10,
      alignItems: "center", 
      backgroundColor: "black",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 30, 
    color: "#4A90E2", 
  },
  textoT: {
    fontSize: 25,
    fontWeight: "bold", 
    marginBottom: 20, 
    color: "#4A90E2", 
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold", 
    marginBottom: 20, 
    color: "white", 

  },
  coluna: {
   marginTop: 50,
   padding: 10
  },
  textoU: {
    color: 'white',
    fontWeight: 100

  },
  linkContainer: {
    flexDirection: "row", 
      justifyContent: "space-around", 
      width: "100%", 
      paddingHorizontal: 20, 
      position: "absolute", 
      bottom: 20, 
  },
  link: {
    fontSize: 15, 
    fontWeight: 'bold',
    color: "#4A90E2",  
    marginVertical: 10, 
    textAlign: "center", 
    paddingVertical: 20, 
    paddingHorizontal: 23, 
    borderRadius: 12, 
    overflow: "hidden",
  }
});