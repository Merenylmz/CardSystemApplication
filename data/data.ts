import axios from "axios";
import { SafeAreaViewBase } from "react-native";

export const getData = async(url: string) =>{
    try {
        const response = await axios.get(url);
        const data = await response.data;      
        return data;  
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const addData = async(url: string, inputs: object)=>{
    try {
        const response = await axios.post(url, inputs);
        const data = await response.data;
        return data; 
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const editData = async(url: string, inputs: object)=>{
    try {
        const response = await axios.post(url, inputs);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const deleteData = async(url: string)=>{
    try {
        const response = await axios.delete(url);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
}