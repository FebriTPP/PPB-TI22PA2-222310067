import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (password) => {
    if (password.length < 3) {
      return 'Type minimum 3 character';
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&*()_+=-{};:'<>,./?]).{8,}$/.test(password)) {
      return 'Value must contain alphabet, number and symbol';
    } else {
      return 'Password is valid';
    }
  };

  const handleSubmit = () => {
    if (email === '222310067@student.ibik.ac.id' && password === '222310067') {
      alert('Sign In Success');
      // Langsung pindah ke next page
    } else {
      alert('Email/Password is not match');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.box}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button title="SIGN IN" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;
