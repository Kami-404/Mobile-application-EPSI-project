import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Vérifie si le nom d'utilisateur contient le mot "epsi"
    if (username.toLowerCase().includes('epsi')) {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage("Le nom d'utilisateur n'est pas valide");
    }
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  return (
    <View>
      <Text>Vous êtes étudiant, connectez-vous pour poser vos questions</Text>
      {isLoggedIn ? (
        <Text>Vous êtes connecté ! Redirection vers la page d'accueil...</Text>
      ) : (
        <View>
          <TextInput
            style={{ borderWidth: 1, padding: 10 }}
            value={username}
            onChangeText={handleUsernameChange}
            placeholder="Nom d'utilisateur"
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text>Se connecter</Text>
          </TouchableOpacity>
          {errorMessage !== '' && <Text>{errorMessage}</Text>}
        </View>
      )}
    </View>
  );
};

export default LoginPage;
