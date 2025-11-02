import axios from "axios";

export const getData = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log("Error", err);
    return false;
  }
};

export const addOrEditData = async(url: string, inputs: object)=>{
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