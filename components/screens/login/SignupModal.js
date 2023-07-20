import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SignupModal() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.log("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, firstName, lastName, age, phoneNumber, email, address,
          postalCode, city,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Inscription réussie:', data);
      } else {
        console.log('Erreur lors de l\'inscription:', data.error);
      }
    } catch (error) {
      console.error('Erreur de connexion au serveur:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry/>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry/>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}/>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}/>
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"/>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"/>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"/>
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={setAddress}
          value={address}/>
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          onChangeText={setPostalCode}
          value={postalCode}
          keyboardType="numeric"/>
        <TextInput
          style={styles.input}
          placeholder="City"
          onChangeText={setCity}
          value={city}/>
        <View style={styles.buttonContainer}>
          <Button title="S'inscrire" onPress={handleSignup} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  }
})
