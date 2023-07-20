import React, { useState } from 'react';
import { View, Button , StyleSheet} from 'react-native';
import Accueil from './components/screens/accueil/Accueil';
import Map from './components/screens/carte/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './components/screens/profils/ProfileScreen';
import CameraScreen from './components/screens/camera/CameraScreen';
import LoginScreen from './components/screens/login/LoginScreen';
import SignupModal from './components/screens/login/SignupModal';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    setShowSignupModal((prevShowSignupModal) => !prevShowSignupModal);
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
        <View style={styles.body}>
            <View style={styles.login}>
            <LoginScreen onLogin={handleLogin} style={styles.input} />
            </View>
            {showSignupModal && <SignupModal />}
            <View style={styles.inscription} >
            <Button title="S'inscrire" onPress={handleSignup}  />
            </View>
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  login: {
    marginTop: 130,
    height: 500,
    width: 300,
    left:50
  },
  inscription:{
    width:240,
    left:80,
    bottom:150
  }
})