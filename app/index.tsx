import { Image, StyleSheet, Platform, Text, View} from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; 

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import  Light  from '@/components/Light';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a)</Text>
      <Text style={styles.subTitle}>LuminControl</Text>
      <View style={styles.linkContainer}>
        <Link href={"/notificacao"} style={styles.link}><Ionicons name="notifications" size={24} color="blue" />{"\n"}Notificações</Link>
        <Link href={"/configuracao"} style={styles.link}><Ionicons name="settings" size={24} color="blue" />{"\n"}Configurações</Link>
      </View>
      {/* <Light/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#f5f5f5", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold", 
    textAlign: "center", 
    // marginBottom: 20, 
    color: "#333", 
  },
  subTitle: {
    fontSize: 34,
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
    color: "black",  
    marginVertical: 10, 
    textAlign: "center", 
    paddingVertical: 20, 
    paddingHorizontal: 23, 
    borderRadius: 12, 
    overflow: "hidden",
  },
});
