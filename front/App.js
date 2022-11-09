import { StyleSheet} from 'react-native';
import Inicio from './pantallas/Inicio';
import SearchScreen from './pantallas/SearchScreen';
import CalidadAire from './pantallas/CalidadAire';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer styles = {styles.container}>
          <Tab.Navigator initialRouteName = "Noticias" screenOptions = {{
            tabBarActiveTintColor: "red"
          }}>
            <Tab.Screen name = "Buscar" component={SearchScreen} options ={{
              tabBarIcon: () => <FontAwesome name = "search" size = {24} color="black"/>
            }}/>
            <Tab.Screen name = "Noticias" component={Inicio} options={{
              tabBarIcon: () => <Entypo name = "home" size = {24} color = "black"/>  
            }}/>

            <Tab.Screen name = "Calidad de Aire" component={CalidadAire} options={{
              tabBarIcon: () => <MaterialCommunityIcons name = "weather-cloudy-alert" size = {24} color = "black"/>  
            }}/>

          </Tab.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
