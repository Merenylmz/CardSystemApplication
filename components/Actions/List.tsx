import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";

const List = ({data}: {data: Array<Object>}) => {
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
