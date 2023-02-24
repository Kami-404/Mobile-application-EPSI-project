import Login from './components/screens/login/Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Navigation extends React.Component {
    render(){
    return (
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={LoginStackScreen} options={{ headerShown: false }} />
        <AppStack.Screen name="Accueil" component={Accueil} options={{ title: 'Accueil' }} />
        <AppStack.Screen name="Map" component={Map} options={{ title: 'Map' }} />
        <AppStack.Screen name="Profils" component={Profils} options={{ title: 'Profils' }} />
        <AppStack.Screen name="Camera" component={Camera} options={{ title: 'Caméra' }} />
      </AppStack.Navigator>
    )
}
}
  