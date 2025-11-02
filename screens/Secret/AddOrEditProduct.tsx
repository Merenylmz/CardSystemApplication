import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addOrEditData } from "../../data/data";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AddOrEditProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigation = useNavigation<any>();
  const {user, token} = useSelector((state: RootState)=>state.auth);

  const handleProduct = async () => {
    const data = await addOrEditData("http://172.19.16.1:3002/products/add", {title, description, price, email: user});
    navigation.navigate("BottomTabs", {screen: "HomePage"});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ekle</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={price}
        placeholder="Price"
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
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
