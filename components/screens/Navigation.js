import Login from './components/screens/login/Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Navigation extends React.Component {
    render(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Accueil" component={Accueil} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Map" component={Map} options={{ title: 'Map' }} />
        <Stack.Screen name="Profils" component={Profils} options={{ title: 'Profils' }} />
        <Stack.Screen name="Camera" component={Camera} options={{ title: 'Caméra' }} />
      </Stack.Navigator>
    )
}
}
  