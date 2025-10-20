import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import List from "../../components/Actions/List";
import { getData } from "../../data/data";

const Orders = () => {
    const [orders, setOrders] = useState();
    useLayoutEffect(()=>{
        (async()=>{
            const data = await getData("http://172.19.16.1:3002/orders"); 

        })()
    }, []);
  return (
    <View>
      {/* <List data={} /> */}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
