import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { globalStyles } from '../globalStyle/GlobalStyle';

const CheckBoxSurvey = (props) => {
  return(
    <View style={globalStyles.surveyContainer}>
      <Text style={globalStyles.surveyTitle}>{props.item}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          title='Yes'
          checked={props.firstCheckBoxQuestion.yes}
          onPress={() => props.onPress('Yes')}
        />
        <CheckBox
          title='Not Bad'
          checked={props.firstCheckBoxQuestion.notbad}
          onPress={() => props.onPress('Not Bad')}
        />
        <CheckBox
          title='Bad'
          checked={props.firstCheckBoxQuestion.bad}
          onPress={() => props.onPress('Bad')}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default CheckBoxSurvey;