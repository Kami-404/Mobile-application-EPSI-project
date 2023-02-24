import React from 'react';
import Accueil from './components/screens/accueil/Accueil';
import Profils from './components/screens/profils/Profils';
import Map from './components/screens/carte/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const tab = createBottomTabNavigator();

export default class App extends React.Component {
    render() {
    return (
        <NavigationContainer>
          <AppStackScreen />
        </NavigationContainer>
    )
  }
}
