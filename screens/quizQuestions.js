import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const quizQuestions = ({ navigation }) => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const questions = [
    "(Mental Health) How well can you remember things? (1-10)",
    "(Mental Health) Have you seen, heard, or sensed things that aren’t really there? (yes/no)",
    "(Mental Health) Do you feel sadness or depression? (yes/no)",
    "(Mental Health) How anxious or nervous do you feel? (1-10)",
    "(Mental Health) Do you feel a lack of motivation to socialize or do activities? (yes/no)",
    "(Mental Health) Are you experiencing addictions or obsessions that are hard to suppress? (yes/no)",
    "(Sleep & Fatigue) How good of a sleep have you gotten over the last 3 days/how rested do you feel? (1-10)",
    "(Sleep & Fatigue) How many hours a day of sleep per night do you get? (1-10)",
    "(Sleep & Fatigue) Do you have trouble staying awake during the daytime? (yes/no)",
    "(Sleep & Fatigue) Do you find yourself turning in bed? (yes/no)",
    "(Sleep & Fatigue) How tired do you feel throughout the day? (1-10)",
    "(Sleep & Fatigue) Do you feel pain throughout the day? (yes/no)",
    "(Movement) Do you have wiggling, tweaking, or jerking movements? (yes/no)",
    "(Movement) How many hours do you experience these symptoms? (1-10)",
    "(Movement) Do you feel lightheaded when standing? (yes/no)",
    "(Movement) How badly do your jerking movements impact your day-to-day actions? (1-10)",
    "(Movement) How balanced do you feel when walking? (1-10)",
    "(Movement) How badly do your motor symptoms impact your daily life/actions? (1-10)",
    "(Movement) Do you feel like you are aware of when your motor symptoms will occur? (yes/no)",
    "(Movement) Do you have painful cramps or spasms when you are not experiencing symptoms? (yes/no)",
    "(Movement) Do you ever find yourself freezing mid-motion? (yes/no)",
    "(Movement) Do you experience shaking or having a tremor? (yes/no)",
    "(Daily Routine & Actions) How difficult is it for you to get dressed? (1-10)",
    "(Daily Routine & Actions) How difficult is it to get out of bed, a car, or a deep chair? (1-10)",
    "(Daily Routine & Actions) Do you have difficulty urinating? (yes/no)",
    "(Daily Routine & Actions) How difficult is chewing and swallowing? (1-10)",
    "(Daily Routine & Actions) Do you have issues with constipation? (yes/no)",
    "(Daily Routine & Actions) Do you have difficulty with speaking? (yes/no)",
    "(Daily Routine & Actions) Do you find yourself having excess saliva? (yes/no)",
    "(Daily Routine & Actions) Do you have difficulty eating or using utensils? (yes/no)",
    "(Daily Routine & Actions) Do you have difficulty with hygiene tasks? (yes/no)",
    "(Daily Routine & Actions) Do you have any other difficulties with hobbies and activities? (yes/no)",
    "(Daily Routine & Actions) How well are you able to write on paper? (1-10)",
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [`q${currentQuestion}`]: answer });
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const renderQuestionnaire = () => {
    if (currentQuestion <= questions.length) {
      const question = questions[currentQuestion - 1];

      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>

          {question.includes('(yes/no)') ? (
            <View style={styles.yesNoContainer}>
              <TouchableOpacity onPress={() => handleAnswer('Yes')} style={styles.answerButton}>
                <Text style={styles.answerText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAnswer('No')} style={styles.answerButton}>
                <Text style={styles.answerText}>No</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TextInput
              keyboardType="numeric"
              placeholder="Enter your answer"
              onChangeText={(text) => handleAnswer(text)}
              style={styles.textInput}
            />
          )}

          {currentQuestion > 1 && (
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    } else {
      // All questions answered
      console.log('Answers:', answers);
      // You can store or send the answers as needed
      return <Text>Questionnaire completed!</Text>;
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>I am screen3</Text>

      {showQuestionnaire ? (
        renderQuestionnaire()
      ) : (
        <TouchableOpacity onPress={() => setShowQuestionnaire(true)} style={styles.button}>
          <Text style={styles.buttonText}>Start Questionnaire</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('NestedScreen3', { msg: 'From Screen 3' })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000025',
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#0275d8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  yesNoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  answerButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  answerText: {
    color: '#fff',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  backButton: {
    marginTop: 10,
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#000',
  },
});

export default quizQuestions;
