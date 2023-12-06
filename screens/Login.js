//Login.js 
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Login = ({ navigation, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (username === '' && password === '') {
      // Successful login
      setIsLoggedIn(true);
      navigation.navigate('Home');
    } else {
      // Failed login
      Alert.alert('Login Failed', 'Check your username and password.');
    }

    if (rememberMe) {
      // Remember user email and password
      // (This part can be implemented as needed)
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.formTitle}>Sign in</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && <Text>✓</Text>}
          </TouchableOpacity>
          <Text>Remember Me</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link}>
          Not a member? <Text style={styles.signupLink}>Signup now</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '150%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    color: 'gray',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 0,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    marginTop: 5,
  },
  signupLink: {
    color: 'blue',
  },
});

export default Login;
