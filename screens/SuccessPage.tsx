import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const SuccessPage : React.FC = () => {
    // const route = useRoute() as {params: {data: any}};
    const navigation = useNavigation();
    // route.params.data

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your Order Created Succesfully</Text>
            <Button title="Home" onPress={()=>{navigation.navigate("BottomTabs", {screen: "HomePage"});}}/> 
        </View>
    );
};

export default SuccessPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    },
    text: {
        marginVertical: 20,
        textAlign: "center"
    }
});
