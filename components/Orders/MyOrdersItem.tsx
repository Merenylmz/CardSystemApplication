import { Image, StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";

const MyOrdersItem = ({data, onPress}: {data: any, onPress?:any}) => {
  return (
    <View>
      <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image src="https://picsum.photos/100/100" width={100} height={100}/>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{data.content}</Text>
                <Text>{data.products[0].quantity}</Text>
            </View>
        </View>
    </Pressable>
    </View>
  );
};//m.erenyilmaz2007@gmail.com

export default MyOrdersItem;

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderWidth: 1,
        height: 100,
        overflow: "hidden",
        borderRadius: 10,
        marginVertical: 10,
    },
    imageContainer: {
        borderRightWidth: 2
    },
    detailContainer: {
        padding: 8
    },
    title: {
        fontSize: 25,
    },
    pressed: {
        opacity: .8,
        shadowColor: "black",
        // shadowOffset: 
    }
});
