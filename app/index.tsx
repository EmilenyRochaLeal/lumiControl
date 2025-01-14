import { Image, StyleSheet, Platform, Text, View} from 'react-native';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    <View>
      <Text>Brilho Atual</Text>
      <Link href={"/notificacao"}>Ir para as notificações</Link>
      <Link href={"/configuracao"}>Ir para as configurações</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: "center",
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
});
