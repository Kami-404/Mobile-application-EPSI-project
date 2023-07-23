import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique d'authentification
    // Par exemple, vérification des identifiants dans une base de données
    // Si les informations d'identification sont correctes, naviguez vers la page d'accueil.
    // Exemple basique ici, où nous supposons que le nom d'utilisateur et le mot de passe sont "admin"
    if (username === 'john.smith@gmail.com' && password === 'Amelie2002@') {
      navigation.navigate('Accueil');
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <View style={styles.container}>


      <Text style={styles.title}>Page de connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default LoginScreen;


