import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { addOrEditData } from "../../data/data";

const AddOrEditProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState("");
    const navigation = useNavigation();

    const handleProduct = async() => {
        console.log(title, description, price);
        
        // const data = await addOrEditData("http://172.19.16.1:3002/products/add", {title, description, price});
        // console.log(data);

        navigation.navigate("HomePage");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>

            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                keyboardType="number-pad"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={handleProduct}>
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddOrEditProduct;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
