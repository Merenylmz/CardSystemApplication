import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ProductTypes } from "../../types/Types";

const ListItem = ({onPress, data} : {onPress: any, data: ProductTypes}) => {
  return (
    <View>
      <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
          <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image src="https://picsum.photos/100/100" width={100} height={100}/>
              </View>
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text>{data.price} TL</Text>
              </View>
          </View>
      </Pressable>
  </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    borderWidth: 1,
    height: 100,
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 10
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
