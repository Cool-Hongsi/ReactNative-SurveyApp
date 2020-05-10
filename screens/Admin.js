import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { adminPW } from '../types';
import { MaterialIcons } from '@expo/vector-icons';
import { ADMIN_PASSWORD } from '../types';
import InputComp from '../sharedComp/InputComp';
import SharedButton from '../sharedComp/SharedButton';
import { redux_SetAdminPassword, redux_SurveyAPIPostResultRequest } from '../reducer/ducksReducer';
import { globalStyles } from '../globalStyle/GlobalStyle';

const { ADMIN_PASSWORD_INPUT } = ADMIN_PASSWORD;

const Admin = (props) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {

    if(adminPW === props.redux_adminPassword[ADMIN_PASSWORD_INPUT]){
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }

  }, [props.redux_adminPassword[ADMIN_PASSWORD_INPUT]]);

  const seePostResult = () => {
    setModalOpen(true);
  };

  const onChangeTextPWHandler = (e, name) => {
    props.redux_SetAdminPassword({ inputName : name, inputValue : e });
  };

  const onPressComparePW = () => {
    if(activeButton){
      props.redux_SurveyAPIPostResultRequest();
      setModalOpen(false);
    } else {
      Alert.alert('Check Point', 'Password Not Match', [{
        text : 'Okay', onPress: () => console.log('Password Not Match')
      }])
    }
  };

  return(
    <View style={styles.adminContainer}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{...styles.modalToggle, ...styles.modalToggleClose}} // 2개의 style 적용
              onPress={() => setModalOpen(false)}
            />
            <View style={styles.modalContentTextInput}>
              <InputComp
                name={ADMIN_PASSWORD_INPUT}
                placeholder={'Password'}
                value={props.redux_adminPassword[ADMIN_PASSWORD_INPUT]}
                onChangeText={onChangeTextPWHandler}
              />
            </View>
            <SharedButton title='Password Match' activeButton={activeButton} onPress={onPressComparePW} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      {/* Survey Data Result Calling Background */}
      {(props.redux_suveyResult.processing)
      ?
        <View style={globalStyles.apiCallingPage}>
          {/* Circular Progress */}
          <Text style={globalStyles.apiCallingText}>Receiving data...</Text>
        </View>
      :
        null
      }
      
      <TouchableOpacity onPress={seePostResult}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.adminTitle}>
            <Text style={{fontSize: 16, fontFamily: 'OpenSans-Bold', textAlign: 'center'}}>See Post Result</Text>
          </View>
        </View>
      </TouchableOpacity>

      <ScrollView>
        <View style={{padding: 30}}>
          {(props.redux_suveyResult.result !== null)
          ?
            <View style={{}}> 
              {props.redux_suveyResult.result.map((el, index) => {
                return(
                  <View key={index} style={{marginBottom: 20}}>
                    <Text style={{fontSize: 16}}>Name : {el.username}</Text>
                    <Text style={{fontSize: 16}}>Email : {el.useremail}</Text>
                    <Text style={{fontSize: 16}}>Satisfaction : {el.answer1}</Text>
                    <Text style={{fontSize: 16}}>Position : {el.answer2}</Text>
                    <Text style={{fontSize: 16}}>Salary : {el.answer3}</Text>
                    <Text style={{fontSize: 16}}>Opinion : {el.answer4}</Text>
                  </View>
                )
              })}
            </View>
          :
            null
          }
        </View>
      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  adminContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  adminTitle: {
    width: 200,
    height: 46,
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    marginVertical: 30
  },
  modalContent: {
    flex: 1,
    alignItems: 'center'
  },
  modalContentTextInput: {
    marginTop: 50
  }, 
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalToggleClose: {
    marginTop: 20,
    marginBottom: 0
  }
});

const mapStateToProps = state => ({
  redux_adminPassword : state.ducksReducer.admin,
  redux_suveyResult : state.ducksReducer.survey.surveyDataResultStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    redux_SetAdminPassword: (inputData) => { dispatch(redux_SetAdminPassword(inputData)) },
    redux_SurveyAPIPostResultRequest: () => { dispatch(redux_SurveyAPIPostResultRequest()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);