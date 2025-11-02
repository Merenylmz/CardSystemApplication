import { Alert, StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { addOrEditData, deleteData, getData } from "../../data/data";
import { ProductTypes } from "../../types/Types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigation } from "@react-navigation/native";
import { resetOrder, deleteOrders } from "../../store/slices/ordersSlices";
import DropDownPicker from "react-native-dropdown-picker";

const MyOrders = () => {
  const [orders, setOrders] = useState<ProductTypes[]>([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [products, setProducts] = useState<Array<{ label: string; value: string, id: any }>>([]);

  const { user, token } = useSelector((state: RootState) => state.auth);
  const orderIds = useSelector((state: RootState) => state.orders.ids) as string[];

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    (async () => {
      try {
        const data = await getData(`http://172.19.16.1:3002/orders?email=${user}`);
        setOrders(data || []);

        const productResponse = await getData("http://172.19.16.1:3002/products");
        const productArray = (productResponse?.products || []) as ProductTypes[];

        const dropdownItems = productArray.map((p) => ({
          label: p.title,
          value: p.title.toLowerCase(),
          id: p._id
        }));

        setProducts(dropdownItems);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch data.");
      }
    })();
  }, []);

  const verifyBasket = async () => {
    if (orderIds.length === 0) {
      return Alert.alert("Warning", "You must add something to your basket", [
        {
          text: "Home",
          onPress: () => navigation.navigate("HomePage"),
          style: "default",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    }

    const productsArray = orderIds.map((id) => ({
      product: id,
      quantity: 1,
    }));

    try {
      const response = await addOrEditData(
        `http://172.19.16.1:3002/orders/neworder?token=${token}`,
        {
          content: "Your Order",
          email: user,
          products: productsArray,
        }
      );

      if (response?.content) {
        dispatch(resetOrder({}));
        navigation.navigate("SuccessPage", { data: response.content });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to submit order.");
    }
  };

  const handleDeleteProduct = async() => {
    if (!value) {
      return Alert.alert("Warning", "Please select a product to delete.");
    }

    const selected = products.find((p) => p.value === value);
    if (selected) {
      console.log("deneme");
      
      const res = await deleteData(`http://172.19.16.1:3002/products/delete/${selected.id}`);
      console.log(res);
      

      products.splice(products.findIndex((item)=>item.id == selected.id), 1);
      Alert.alert("Deleted", `${selected.label} removed from your basket.`);
      setValue(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You Have {orderIds.length} Order(s)</Text>

      <View style={styles.buttonContainer}>
        <Button title="Verify Your Basket" onPress={verifyBasket} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add Product" onPress={() => navigation.navigate("AddOrEditPage")} />
      </View>

      <DropDownPicker
        open={open}
        value={value}
        items={products}
        setItems={setProducts}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select a Product to Delete"
        listMode="SCROLLVIEW"
        style={styles.dropdown}
        zIndex={1000}
      />

      <View style={styles.buttonContainer}>
        <Button title="Delete Product" onPress={handleDeleteProduct} />
      </View>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 21,
    marginBottom: 10,
  },
  dropdown: {
    marginTop: 20,
    borderColor: "#ccc",
  },
});