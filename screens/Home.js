// Home.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Welcome, user!</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('calendarFunction')}>
          <Image
            source={require('../images/calendarImage.jpg')}
            style={styles.calendarImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('quizQuestions')}>
          <Image
            source={require('../images/quizIcon.jpg')}
            style={styles.quizIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('calendarFunction')}>
        <Text style={styles.buttonText}>Go to calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('quizQuestions')}>
        <Text style={styles.quizText}>Go to quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row', // Align the text and images horizontally
    alignItems: 'flex-start', // Align items to the start (left) of the container
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: -255,
    marginTop: -240,
  },
  quizText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 390, // Adjust the marginLeft for positioning
    marginTop: -240, // Adjust the marginTop for spacing
  },
  calendarImage: {
    width: 200,
    height: 200,
    marginTop: 120,
    marginLeft: 0,
  },
  quizIcon: {
    width: 200,
    height: 200,
    marginTop: 120,
    marginLeft: 200,
  },
});

export default Home;
