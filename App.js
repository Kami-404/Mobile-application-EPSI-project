import React from 'react';
import { View, Button } from 'react-native';
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

export default class App extends React.Component {
  state = {
    isLoggedIn: false,
    showSignupModal: false,
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  handleSignup = () => {
    this.setState((prevState) => ({
      showSignupModal: !prevState.showSignupModal,
    }));
  };

  render() {
    return (
      <NavigationContainer>
        {this.state.isLoggedIn ? (
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
          <View>
            <LoginScreen onLogin={this.handleLogin} />
            <Button title="S'inscrire" onPress={this.handleSignup} />
            {this.state.showSignupModal && <SignupModal />}
          </View>
        )}
      </NavigationContainer>
    );
  }
}
