import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import AllProducts from './screens/Products/AllProducts';
import { Colors } from './constant/constant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Detail from './screens/Products/Detail';
import IconButton from './components/UI/IconButton';


const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabsOverview = () =>{
  // const navigation = useNavigation();
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: Colors.primaryColor},
      headerTintColor: "#fff",
      tabBarStyle: {backgroundColor: Colors.primaryColor},
      tabBarActiveTintColor: "#aff"
    }}>
      <BottomTabs.Screen name='HomePage' component={Home} options={{
        tabBarIcon: ({color, size})=><Ionicons name="home" color={color} size={size}/>,
        title: "Home"
      }}/>
      <BottomTabs.Screen name='AllProducts' component={AllProducts}  options={{
        tabBarIcon: ({color, size})=><Ionicons name="list" color={color} size={size}/>,
        title: "Products"
      }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='BottomTabs' component={BottomTabsOverview} options={{
            headerShown: false,
            animation: 'fade',
          }}/>
          <Stack.Screen name='Details' component={Detail} options={{
            headerStyle: {backgroundColor: Colors.primaryColor,},
            headerTintColor: "#fff",
            headerShown: true,
            animation: 'fade',
            headerRight: ({tintColor})=>{
             return <IconButton color={tintColor as string} size={24} name='star'/>
            }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light'/>
    </>
  );
}

