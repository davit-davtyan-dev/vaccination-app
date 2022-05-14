import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import QRCode from "react-native-qrcode-svg";
import { Fontisto } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

export default function Covid19() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://storage.googleapis.com/tutorbot-public-files/placement-test/7442c63b-3c87-47d9-ac3f-647eaba4690d.jpeg" }}
      />
      <Text style={styles.title}>Աանգ</Text>
      <Text style={styles.title}>Aang</Text>
      <View style={styles.descriptionContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[styles.description, styles.date]}
            lightColor="rgba(0,0,0,0.5)"
            darkColor="rgba(255,255,255,0.8)"
          >
            03.08.2021
          </Text>
          <Fontisto name="injection-syringe" style={styles.icon} iconSet="Fontisto" size={30} />
        </View>
        <Text style={styles.description}>CoronaVac</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <QRCode size={200} value="the last airbender" color="#46d245" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const imageSize = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontWeight: "100",
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 32,
  },
  separator: {
    marginVertical: 16,
    height: 2,
    width: '100%',
  },
  image: {
    marginTop: 32,
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  },
  icon: {
    transform: [{ rotate: "-90deg" }],
    marginLeft: 8,
    color: "rgba(0, 0, 0, 0.5)",
  },
});
