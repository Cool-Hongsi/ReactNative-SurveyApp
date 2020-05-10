import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { redux_InitializeUserInputData } from '../reducer/ducksReducer';
import { globalStyles } from '../globalStyle/GlobalStyle';

const SubmitSurvey = (props) => {

  const goHome = () => {
    props.redux_InitializeUserInputData();
    props.navigation.navigate('Home');
  };

  return(
    <View style={styles.submitSurveyContainer}>

      {/* Survey Data POST Calling Background */}
      {(props.redux_surveyData.processing)
      ?
        <View style={globalStyles.apiCallingPage}>
          {/* Circular Progress */}
          <Text style={globalStyles.apiCallingText}>Submitting...</Text>
        </View>
      :
        null
      }

      <Text style={{fontSize: 18}}>Thank you {props.route.params.name}<Image source={require('../assets/heartIcon.png')} /></Text>
      <Text style={{fontSize: 18, marginVertical: 40}}>Your survey is submitted successfully</Text>
      
      <TouchableOpacity onPress={goHome}>
        <View style={styles.submitSurveyButton}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Go Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  submitSurveyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  submitSurveyButton: {
    width: 200,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fc1231'
  }
});

const mapStateToProps = state => ({
  redux_surveyData : state.ducksReducer.survey.surveyDataStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    redux_InitializeUserInputData: () => { dispatch(redux_InitializeUserInputData()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitSurvey);
