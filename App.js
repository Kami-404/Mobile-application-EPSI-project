import React from 'react';
import Accueil from './components/screens/accueil/Accueil';
import Profils from './components/screens/profils/Profils';
import Map from './components/screens/carte/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();

export default class App extends React.Component {
    render() {
    return (
      <NavigationContainer>
          <tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name == "Accueil"){
                  iconName = "home"
                } else if (route.name == "Map"){
                  iconName = "map"
                } else if (route.name == "Profils"){
                  iconName = "person"
                }
                return <Ionicons name={iconName} size={25} color="#3CB371" />
              }
            })}>
            <tab.Screen name='Accueil' component={Accueil}/>
            <tab.Screen name='Map' component={Map}/>
            <tab.Screen name='Profils' component={Profils}/>
          </tab.Navigator>
      </NavigationContainer>
    )
  }
}
