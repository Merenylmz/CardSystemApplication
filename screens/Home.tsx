import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getData } from "../data/data";
import List from "../components/Actions/List";
import { ProductTypes } from "../types/Types";

const Home = () => {
    const [data, setData] = useState<Array<ProductTypes>>();
    
    useEffect(() => {
        const getItems = async () => {
            const info = await getData("http://172.19.16.1:3002/products");
            setData(info.products); 
        };
        getItems();
    }, []);
    return (
        <Layout>
            <List data={data!}/>
        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({});