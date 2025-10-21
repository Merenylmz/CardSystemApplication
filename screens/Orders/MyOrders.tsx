import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import List from "../../components/Actions/List";
import { getData } from "../../data/data";
import { ProductTypes } from "../../types/Types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const MyOrders = () => {
    const [orders, setOrders] = useState<ProductTypes[]>();
    const email = useSelector((state: RootState)=>state.auth.user);
    
    useLayoutEffect(()=>{
        (async()=>{
            const data = await getData("http://172.19.16.1:3002/orders?email="+email); 
            setOrders(data);
        })()
    }, []);
  return (
    <View>
      <List data={orders!} />
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
