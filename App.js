import React from 'react';
import Accueil from './components/screens/accueil/Accueil';
// import Profils from './components/screens/profils/Profils';
import Map from './components/screens/carte/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './components/screens/profils/ProfileScreen';
import CameraScreen from './components/screens/camera/CameraScreen';
import LoginScreen from './components/screens/login/Login'

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
                } else if (route.name == "ProfileScreen"){
                  iconName = "person"
                } else if (route.name == "CameraScreen"){
                  iconName = "camera"
                }
                else if (route.name == "LoginScreen"){
                          iconName = "login"
                                }
                return <Ionicons name={iconName} size={25} color="#3CB371" />
              }
            })}>
            <tab.Screen name='login' component={LoginScreen}/>
                       <tab.Screen name='Accueil' component={Accueil}/>
            <tab.Screen name='Map' component={Map}/>
            <tab.Screen name='Camera' component={CameraScreen}/>
            <tab.Screen name='Profils' component={ProfileScreen}/>

          </tab.Navigator>
      </NavigationContainer>

    )
  }
}
