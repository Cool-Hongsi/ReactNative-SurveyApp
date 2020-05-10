import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList, Alert } from 'react-native';
import CheckBoxSurvey from './CheckBoxSurvey';
import TextInputSurvey from './TextInputSurvey';
import SharedButton from '../sharedComp/SharedButton';
import { redux_SetUserInfoSatisFaction, redux_SetUserInfoPositionSalaryOpinion, redux_SurveyAPIPostRequest } from '../reducer/ducksReducer';
import { FORM_USER_INFO } from '../types';
import { check_empty } from '../util';
import { globalStyles } from '../globalStyle/GlobalStyle';

const { FORM_USER_INFO_NAME, FORM_USER_INFO_SATISFACTION, FORM_USER_INFO_POSITION, FORM_USER_INFO_SALARY, FORM_USER_INFO_OPINION } = FORM_USER_INFO;

const Survey = (props) => {

  const [activeButton, setActiveButton] = useState(false);

  const [firstCheckBoxQuestion, setFirstCheckBoxQuestion] = useState({
    yes : false,
    notbad : false,
    bad : false
  });

  const setCheckBox = (string) => {
    if(string === 'Yes'){
      setFirstCheckBoxQuestion({ ...firstCheckBoxQuestion, yes : true, notbad : false, bad : false });
      props.redux_SetUserInfoSatisFaction('yes');
    } else if (string === 'Not Bad') {
      setFirstCheckBoxQuestion({ ...firstCheckBoxQuestion, yes : false, notbad : true, bad : false });
      props.redux_SetUserInfoSatisFaction('notbad');
    } else {
      setFirstCheckBoxQuestion({ ...firstCheckBoxQuestion, yes : false, notbad : false, bad : true });
      props.redux_SetUserInfoSatisFaction('bad');
    }
  };

  const setTextInput = (e, name) => {
    props.redux_SetUserInfoPositionSalaryOpinion({ inputName : name, inputValue : e });
  };

  const onPressSubmitButton = () => {
    if(activeButton){
      props.redux_SurveyAPIPostRequest();
      props.navigation.navigate('SubmitSurvey', { name : props.redux_userInfo[FORM_USER_INFO_NAME] });
    } else {
      Alert.alert('Check Point', 'Please fill in whole answer sheet', [{
        text : 'Okay', onPress: () => console.log('Please fill in whole answer sheet')
      }]);
    }5
  };

  useEffect(() => {

    if(check_empty(props.redux_userInfo[FORM_USER_INFO_SATISFACTION]) && check_empty(props.redux_userInfo[FORM_USER_INFO_POSITION])
    && check_empty(props.redux_userInfo[FORM_USER_INFO_SALARY]) && check_empty(props.redux_userInfo[FORM_USER_INFO_OPINION])){
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }

  }, [props.redux_userInfo[FORM_USER_INFO_SATISFACTION], props.redux_userInfo[FORM_USER_INFO_POSITION], props.redux_userInfo[FORM_USER_INFO_SALARY], props.redux_userInfo[FORM_USER_INFO_OPINION]]);

  return(
    <View style={styles.surveyContainer}>

      {/* Survey List GET Calling Background */}
      {(props.redux_surveyList.processing)
      ?
        <View style={globalStyles.apiCallingPage}>
          {/* Circular Progress */}
          <Text style={globalStyles.apiCallingText}>Survey List Calling...</Text>
        </View>
      :
        null
      }
      
      <View style={styles.surveySubContainer}>
        <View><Text style={{fontSize: 18, fontFamily: 'OpenSans-Regular'}}>{props.route.params.name}</Text></View>
        <View><Text style={{fontSize: 18, fontFamily: 'OpenSans-Regular'}}>{props.route.params.email}</Text></View>
      </View>
        
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.surveyList}>
            {(props.redux_surveyList.result !== null)
            ?
              <View>
                {props.redux_surveyList.result.map((el, index) => {
                  if(index === 0){ return(<CheckBoxSurvey key={index} item={el} firstCheckBoxQuestion={firstCheckBoxQuestion} onPress={setCheckBox} />) }
                  else{ return(<TextInputSurvey key={index} index={index} item={el} onChangeText={setTextInput} />) }
                })}
              </View>
            :
              null
            }
            <SharedButton title='Submit' activeButton={activeButton} onPress={onPressSubmitButton} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  surveyContainer : {
    flex: 1,
    backgroundColor: '#fff', 
  },
  surveySubContainer : {
    padding: 30,
    backgroundColor: '#ffffbf'
  },
  surveyList: {
    padding: 30,
  }
});

const mapStateToProps = state => ({
  redux_userInfo : state.ducksReducer.user,
  redux_surveyList : state.ducksReducer.survey.surveyListStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    redux_SetUserInfoSatisFaction : (inputData) => { dispatch(redux_SetUserInfoSatisFaction(inputData)) },
    redux_SetUserInfoPositionSalaryOpinion : (inputData) => { dispatch(redux_SetUserInfoPositionSalaryOpinion(inputData)) },
    redux_SurveyAPIPostRequest : () => { dispatch(redux_SurveyAPIPostRequest()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
