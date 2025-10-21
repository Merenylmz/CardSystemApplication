import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { ProductTypes } from "../../types/Types";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconButton from "../../components/UI/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "../../store/slices/ordersSlices";
import { AppDispatch, RootState } from "../../store/store";

const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch() as AppDispatch;
  const product = route.params as ProductTypes;
  const productsIDS = useSelector((state:RootState)=>state.orders.ids);
  const productIsFavorite = productsIDS.includes(product._id);

  const handleStarButton = () =>{
    if (product._id) {
      if (productIsFavorite) {
        dispatch(deleteOrders({id: product._id}));
      } else {
        dispatch(addOrders({id: product._id}));
      }
    }
  };

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: ({tintColor} : {tintColor : string})=>{
        return <IconButton color={tintColor as string} size={24} name={productIsFavorite ? 'star': 'star-outline'}  onPress={handleStarButton}/>
      }
    });

  }, [navigation, handleStarButton]);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: "https://picsum.photos/350/250" }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button onPress={()=>console.log(productsIDS)} title="Test"/>
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
