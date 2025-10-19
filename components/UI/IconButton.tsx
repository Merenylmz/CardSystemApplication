import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


const IconButton = ({name, size, color, onPress}: {name: string, size: number, color: string, onPress: any}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color}/>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
