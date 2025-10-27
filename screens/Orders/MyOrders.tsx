import { FlatList, StyleSheet, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import { addOrEditData, getData } from "../../data/data";
import { ProductTypes } from "../../types/Types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MyOrdersItem from "../../components/Orders/MyOrdersItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const MyOrders = () => {
  const [orders, setOrders] = useState<ProductTypes[]>();
  const {user, token} = useSelector((state: RootState)=>state.auth);
  const orderIds = useSelector((state: RootState)=>state.orders.ids) as [];
  const navigation = useNavigation();
  
  useLayoutEffect(()=>{
    (async()=>{
        const data = await getData("http://172.19.16.1:3002/orders?email="+user); 
        setOrders(data);
    })()
  }, []);
  const verifyBasket = async() =>{
    const productsArray = [] as Array<any>;
    orderIds.map(id=>{
      productsArray.push({product: id, quantity: 1});
    });
    const response = await addOrEditData("http://172.19.16.1:3002/orders/neworder?token="+token, {
      content: "Your Order",
      email: user,
      products: productsArray,
    });
    console.log(response);
  };
  return (
    <View style={{flex: 1}}>
      <FlatList data={orders} renderItem={({item})=><MyOrdersItem data={item} />}/>
      <View style={styles.buttonContainer}>
        <Button title="Verify Your Basket" onPress={verifyBasket}/>
      </View>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15
  }
});
