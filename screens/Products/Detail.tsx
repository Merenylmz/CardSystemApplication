import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductTypes } from "../../types/Types";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const route = useRoute();
  console.log(route.params);
  
  const product = route.params as ProductTypes;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: "https://picsum.photos/350/250" }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
    container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
  },

});
