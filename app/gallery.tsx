import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Link } from "expo-router";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string>();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View
      style={Styles.container}
    >
      <StatusBar style="auto" hidden={true} />
      <Text style={Styles.title}>Gallery</Text>
      <Image source={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={Styles.image} />
      <View style={Styles.footerContainer}>
        <Button label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
        <Link href="/" style={{ color: 'white' }}>Back to Home</Link>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
