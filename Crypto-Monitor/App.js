import { StatusBar } from 'expo-status-bar';
import Home from './Screens/Home';
import News from './Screens/News';
import Live from './Screens/Live';
import Settings from './Screens/Settings';
import Search from './Screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CoinsBox from './Components/CoinsBox';
import Details from './Screens/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LiveScreen() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Live" component={Live} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="CoinsBox" component={CoinsBox} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={ ( {route} ) => ({
        tabBarIcon: ( {focused} ) => {
          let iconColor = focused ? '#90ee90' : 'white';
          if(route.name === "Home") {
            return <AntDesign name="home" size={24} color={iconColor} />
          } else if (route.name === "LiveScreen") {
            return <MaterialCommunityIcons name="broadcast" size={24} color={iconColor} />
          } else if (route.name === "News") {
            return <MaterialCommunityIcons name="newspaper-variant-outline" size={24} color={iconColor} />
          } else if (route.name === "Settings") {
            return <Feather name="settings" size={24} color={iconColor} />
          }
        },
        tabBarActiveTintColor: '#90ee90',
        tabBarInactiveBackgroundColor: "#000119",
        tabBarActiveBackgroundColor: "#000119",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0
        }
      }) }
       >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="LiveScreen" component={LiveScreen} />
        <Tab.Screen name="News" component={News}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar style='light' />
    </NavigationContainer >
  );
}