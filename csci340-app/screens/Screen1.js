import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screen2 from './Screen2'


const LoginScreen = () => {
  
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    
    if (username === 'user' && password === 'pass') {
      
      navigation.navigate('Screen2');

    } else {
      Alert.alert('Login Failed, Check your username and password.');
    }
  };
 
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  Toptext: {

    color: '#454545',
    fontWeight: '350',
    fontSize: 27,
    marginBottom: 30,

  }, 
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF8484',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
