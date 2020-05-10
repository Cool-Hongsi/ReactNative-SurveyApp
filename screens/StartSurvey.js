import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const StartSurvey = (props) => {
  return(
    <View style={styles.startSurveyContainer}>
      <TouchableOpacity onPress={props.startSurveyClick}>
        <View style={styles.startSurveyButtonContainer}>
          <Text style={styles.startSurveyButton}>Survey</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  startSurveyContainer: {
    flex: 1,
    backgroundColor: '#fc1231',
    justifyContent: 'center',
    alignItems: 'center'
  },
  startSurveyButtonContainer: {
    borderWidth: 3,
    borderColor: '#fff',
    width: 180,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  startSurveyButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 2
  }
});

export default StartSurvey;