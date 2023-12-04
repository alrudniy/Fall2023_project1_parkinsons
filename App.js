import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import quizQuestions from './screens/quizQuestions'; // Correct case

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Login"
          options={{ title: 'Login' }}
        >
          {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Details' }}
        />
        {/* Add the QuizQuestions screen */}
        <Stack.Screen
          name="quizQuestions"
          component={quizQuestions}
          options={{ title: 'Quiz Questions' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
