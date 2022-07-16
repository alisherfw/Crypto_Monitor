import { StatusBar } from 'expo-status-bar';
import Home from './Screens/Home';
import News from './Screens/News';
import Live from './Screens/Live';
import Settings from './Screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Header from './Components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={ ( {route} ) => ({
        tabBarIcon: ( {focused} ) => {
          let iconColor = focused ? '#77fdd8' : 'white';
          if(route.name === "Home") {
            return <AntDesign name="home" size={24} color={iconColor} />
          } else if (route.name === "Live") {
            return <MaterialCommunityIcons name="broadcast" size={24} color={iconColor} />
          } else if (route.name === "News") {
            return <MaterialCommunityIcons name="newspaper-variant-outline" size={24} color={iconColor} />
          } else if (route.name === "Settings") {
            return <Feather name="settings" size={24} color={iconColor} />
          }
        },
        tabBarActiveTintColor: '#77fdd8',
        tabBarInactiveBackgroundColor: "#000119",
        tabBarActiveBackgroundColor: "#000119",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0
        }
      }) }
       >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Live" component={Live} />
        <Tab.Screen name="News" component={News}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar style='light' />
    </NavigationContainer >
  );
}