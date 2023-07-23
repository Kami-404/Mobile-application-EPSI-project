import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from './components/screens/accueil/Accueil';
import Map from './components/screens/carte/Map';
import ProfileScreen from './components/screens/profils/ProfileScreen';
import CameraScreen from './components/screens/camera/CameraScreen';
import LoginScreen from './components/screens/login/LoginScreen';
import SignupModal from './components/screens/login/SignupModal';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Accueil') {
                iconName = 'home';
              } else if (route.name === 'Map') {
                iconName = 'map';
              } else if (route.name === 'ProfileScreen') {
                iconName = 'person';
              } else if (route.name === 'CameraScreen') {
                iconName = 'camera';
              }
              return <Ionicons name={iconName} size={25} color="#3CB371" />;
            },
          })}
        >
          <Tab.Screen name="Accueil" component={Accueil} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="CameraScreen" component={CameraScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onSignup={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
          <Stack.Screen name="SignupModal" component={SignupModal} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  login: {
    marginTop: 130,
    height: 500,
    width: 300,
    left: 50,
  },
  inscription: {
    width: 240,
    left: 80,
    bottom: 150,
  },
});
