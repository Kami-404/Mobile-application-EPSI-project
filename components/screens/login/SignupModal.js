import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SignupModal({ onSignup }) {
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
      console.log("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/users', {
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
        console.log('Successful registration:', data);
        onSignup();
      } else {
        console.log('Registration error:', data.error);
      }
    } catch (error) {
      console.error('Server connection error:', error);
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});
