import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Image, Alert } from 'react-native';
import { redux_SetUserInfoNameEmail, redux_SurveyAPIGetRequest } from '../reducer/ducksReducer';
import SharedButton from '../sharedComp/SharedButton';
import InputComp from '../sharedComp/InputComp';

import { FORM_USER_INFO } from '../types';
import { validation_Email } from '../util';

const { FORM_USER_INFO_NAME, FORM_USER_INFO_EMAIL } = FORM_USER_INFO;

const Home = (props) => {

  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {

    if(props.redux_userInfo[FORM_USER_INFO_NAME] !== '' && validation_Email(props.redux_userInfo[FORM_USER_INFO_EMAIL])){
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }

  }, [props.redux_userInfo[FORM_USER_INFO_NAME], props.redux_userInfo[FORM_USER_INFO_EMAIL]]);

  const userInfoOnChange = (e, name) => {
    props.redux_SetUserInfoNameEmail({ inputName : name, inputValue : e })
  };

  const onPressHomeButton = () => {
    if(activeButton) {
      props.redux_SurveyAPIGetRequest();
      props.navigation.navigate('Survey', { name : props.redux_userInfo[FORM_USER_INFO_NAME], email : props.redux_userInfo[FORM_USER_INFO_EMAIL] });
      // it will be able to call from redux, but followed original way
    } else {
      Alert.alert('Check Point', 'Please fill in Name & Email', [{
        text : 'Okay', onPress: () => console.log('Please fill in Name & Email')
      }]);
    }
  };

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.homeContainer}>
        
        <View style={styles.homeTitleContainer}>
          <Image source={require('../assets/heartIcon.png')} style={{marginRight: 10}} />
          <Text style={styles.homeTitleText}>Welcome to <Text style={{color: '#fc1231', textTransform: 'uppercase'}}>survey app </Text>!</Text>
          <Image source={require('../assets/heartIcon.png')} style={{marginLeft: 10}} />
        </View>
            
        <InputComp
          name={FORM_USER_INFO_NAME}
          placeholder={'Name'}
          value={props.redux_userInfo[FORM_USER_INFO_NAME]}
          onChangeText={userInfoOnChange}
        />
        <InputComp
          name={FORM_USER_INFO_EMAIL}
          placeholder={'Email'}
          value={props.redux_userInfo[FORM_USER_INFO_EMAIL]}
          onChangeText={userInfoOnChange}
        />

        <SharedButton title='Start' activeButton={activeButton} onPress={onPressHomeButton} />

      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  homeContainer : {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeTitleContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    alignItems: 'center'
  },
  homeTitleText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold'
  },
});

const mapStateToProps = state => ({
  redux_userInfo : state.ducksReducer.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    redux_SetUserInfoNameEmail : (inputData) => { dispatch(redux_SetUserInfoNameEmail(inputData)) },
    redux_SurveyAPIGetRequest : () => { dispatch(redux_SurveyAPIGetRequest()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
