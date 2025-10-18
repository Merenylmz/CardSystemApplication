import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import { ProductTypes } from "../../types/Types";

const List = ({data}: {data: Array<ProductTypes>}) => {
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={({item})=><ListItem onPress={()=>{}} data={item}/>}/>
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
