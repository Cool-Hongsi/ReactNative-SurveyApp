import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../globalStyle/GlobalStyle';
import { FORM_USER_INFO } from '../types';
import InputComp from '../sharedComp/InputComp';

const { FORM_USER_INFO_POSITION, FORM_USER_INFO_SALARY, FORM_USER_INFO_OPINION } = FORM_USER_INFO;

const TextInputSurvey = (props) => {

  const selectQuestions = (index) => {
    switch(index){
      case 1 :
        return (
          <InputComp
            name={FORM_USER_INFO_POSITION}
            placeholder={'Position'}
            value={props.redux_user[FORM_USER_INFO_POSITION]}
            onChangeText={props.onChangeText}
          />
        )
      case 2 :
        return(
          <InputComp
            salary={true}
            name={FORM_USER_INFO_SALARY}
            placeholder={'Salary'}
            value={props.redux_user[FORM_USER_INFO_SALARY]}
            onChangeText={props.onChangeText}
          />
        )
      case 3 :
        return(
          <InputComp
            option={true}
            name={FORM_USER_INFO_OPINION}
            placeholder={'Opinion'}
            value={props.redux_user[FORM_USER_INFO_OPINION]}
            onChangeText={props.onChangeText}
          />
        )
      default :
        return ;
    }
  }

  return(
    <View style={globalStyles.surveyContainer}>
      <Text style={globalStyles.surveyTitle}>{props.item}</Text>
      
      {selectQuestions(props.index)}

    </View>
  )
};

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  redux_user : state.ducksReducer.user
});

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInputSurvey);
