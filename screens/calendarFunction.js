import React from 'react';
import { View, Text } from 'react-native';

const CalendarFunction = ({ route }) => {
  console.log('Route Object:', route);

  const { answers } = route.params || {};
  console.log('Answers from CalendarFunction:', answers);

  return (
    <View>
      <Text>Calendar: </Text>

      {!answers || Object.keys(answers).length === 0 ? (
        <Text>No results available yet!</Text>
      ) : (
        <View>
          {/* Render your calendar functionality with the answers */}
          <Text>Quiz results available. Render calendar here: </Text>
          {/* You can add more components or lwogic here */}
        </View>
      )}
    </View>
  );
};

export default CalendarFunction;
