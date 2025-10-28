import { Alert, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import { addOrEditData, getData } from "../../data/data";
import { ProductTypes } from "../../types/Types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { resetOrder } from "../../store/slices/ordersSlices";

const MyOrders = () => {
  const [orders, setOrders] = useState<ProductTypes[]>();
  const {user, token} = useSelector((state: RootState)=>state.auth);
  const orderIds = useSelector((state: RootState)=>state.orders.ids) as [];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  useLayoutEffect(()=>{
    (async()=>{
        const data = await getData("http://172.19.16.1:3002/orders?email="+user); 
        setOrders(data);
    })()
  }, []);
  const verifyBasket = async() =>{
    if (orderIds.length == 0) {
      return Alert.alert("Warning", "You must add anything", [{
        text: 'Home',
        onPress: () => {navigation.navigate("HomePage")},
        style: 'default',
      }, {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      }]);
    }
    const productsArray = [] as Array<any>;
    orderIds.map(id=>{
      productsArray.push({product: id, quantity: 1});
    });
    const response = await addOrEditData("http://172.19.16.1:3002/orders/neworder?token="+token, {
      content: "Your Order",
      email: user,
      products: productsArray,
    });
    
    if (response.content) {
      dispatch(resetOrder({}));
      navigation.navigate("SuccessPage", {data: response.content});
    }
  };
  return (
    <View style={{flex: 1, padding: 20}}>
      {/* <FlatList data={orders} renderItem={({item})=><MyOrdersItem data={item} />}/> */}
      <Text style={styles.text}>You Have {orderIds.length} Order</Text>
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
  },
  text: {
    textAlign: "center",
    fontSize: 21
  }
});
