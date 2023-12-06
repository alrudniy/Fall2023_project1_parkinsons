//quizQuestions.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform } from 'react-native';
import CalendarFunction from './calendarFunction';

const QuizQuestions = ({ navigation }) => {
  
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  
  
  const [answers, setAnswers] = useState({}); //Stores Questions
  
  
  const [currentQuestion, setCurrentQuestion] = useState(1);
 
  const [sliderValue, setSliderValue] = useState(5); // Initial value for the slider
  

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

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleCompleteQuestionnaire = () => {
    // Navigate to the calendarFunction screen and pass the answers
    navigation.navigate('calendarFunction', { answers });
  };

  const renderQuestionnaire = () => {
    if (currentQuestion <= questions.length) {
      const question = questions[currentQuestion - 1];
      const is1To10ScaleQuestion = question.includes('(1-10)'); // Adjust the check based on your question format

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
            <View>
              {/* Platform-specific slider */}
              {Platform.OS === 'web' ? (
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={sliderValue}
                  onChange={(event) => handleSliderChange(Number(event.target.value))}
                  style={{ width: 400, height: 40 }}
                />
              ) : (
                <Slider
                  style={{ width: 400, height: 40 }}
                  minimumValue={1}
                  maximumValue={10}
                  step={1}
                  value={sliderValue}
                  onValueChange={handleSliderChange}
                />
              )}

              <Text style={styles.sliderValueText}>{`Selected Value: ${sliderValue}`}</Text>

              {/* Conditionally render the Confirm button for 1-10 scale questions */}
              {is1To10ScaleQuestion && (
                <TouchableOpacity onPress={() => handleAnswer(sliderValue)} style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              )}
            </View>
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

      handleCompleteQuestionnaire();

      return <Text>Questionnaire completed!</Text>;

      

      
    }
  };

  return (
    <View style={styles.screen}>
      {showQuestionnaire ? (
        renderQuestionnaire()
      ) : (
        <TouchableOpacity onPress={() => setShowQuestionnaire(true)} style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Questionnaire</Text>
        </TouchableOpacity>
      )}
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
    backgroundColor: '#FF7F7F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  answerText: {
    color: '#fff',
  },
  sliderValueText: {
    textAlign: 'center',
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: '#FF7F7F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#fff',
  },
  backButton: {
    marginTop: 10,
    backgroundColor: '#A9A9A9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#000',
  },
  startButton: {
    backgroundColor: '#FF7F7F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 25,
  },
});

export default QuizQuestions;
