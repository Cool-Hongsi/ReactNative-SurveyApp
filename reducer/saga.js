import { takeEvery, put, select } from "redux-saga/effects";
import { SURVEY_API_GET_REQUEST, redux_SurveyAPIGetSuccess, redux_SurveyAPIGetFailure,
  SURVEY_API_POST_REQUEST, redux_SurveyAPIPostSuccess, redux_SurveyAPIPostFailure,
  SURVEY_API_POST_RESULT_REQUEST, redux_SurveyAPIPostResultSuccess, redux_SurveyAPIPostResultFailure } from './ducksReducer';
import { surveyAPIGet, surveyAPIPost, surveyAPIResult } from '../api/apiCall';
import { FORM_USER_INFO } from '../types';

const { FORM_USER_INFO_NAME, FORM_USER_INFO_EMAIL, FORM_USER_INFO_SATISFACTION, FORM_USER_INFO_POSITION, 
  FORM_USER_INFO_SALARY, FORM_USER_INFO_OPINION } = FORM_USER_INFO;

function* surveyAPIGetCall(action){
  try{
    const res = yield surveyAPIGet();

    // Basically, it should use status property...
    if(res){
      let filteredQuestion = res.map((el) => {
        return el.question;
      });

      yield put(redux_SurveyAPIGetSuccess({ message : "Successfully Called GET API", value : filteredQuestion }));
    } else {
      yield put(redux_SurveyAPIGetFailure({ message : "Unsuccessfully Called GET API", value : null }));
    }

  } catch (err) {
    yield put(redux_SurveyAPIGetFailure({ message : err, value : null }));
  }
};

function* surveyAPIPostCall(action){

  const allReducers = yield select();
  const userData = allReducers.ducksReducer.user;

  let filteredObj = {
    "username" : userData[FORM_USER_INFO_NAME],
    "useremail" : userData[FORM_USER_INFO_EMAIL],
    "answer1" : userData[FORM_USER_INFO_SATISFACTION],
    "answer2" : userData[FORM_USER_INFO_POSITION],
    "answer3" : userData[FORM_USER_INFO_SALARY],
    "answer4" : userData[FORM_USER_INFO_OPINION],
  };

  try{
    const res = yield surveyAPIPost(filteredObj);

    // Basically, it should use status property...
    if(res){
      yield put(redux_SurveyAPIPostSuccess({ message : "Successfully Called POST API" }));
    } else {
      yield put(redux_SurveyAPIPostFailure({ message : "Unsuccessfully Called POST API" }));
    }

  } catch (err) {
    yield put(redux_SurveyAPIPostFailure({ message : err }));
  }
};

function* surveyAPIResultCall(action){
  try{
    const res = yield surveyAPIResult();

    // Basically, it should use status property...
    if(res){
      yield put(redux_SurveyAPIPostResultSuccess({ message : "Successfully Called Result API", value : res }));
    } else {
      yield put(redux_SurveyAPIPostResultFailure({ message : "Unsuccessfully Called Result API", value : null }));
    }

  } catch (err) {
    yield put(redux_SurveyAPIPostResultFailure({ message : err, value : null }));
  }
};

export function* requestSagaWatcher(){
  yield takeEvery(SURVEY_API_GET_REQUEST, surveyAPIGetCall);
  yield takeEvery(SURVEY_API_POST_REQUEST, surveyAPIPostCall);
  yield takeEvery(SURVEY_API_POST_RESULT_REQUEST, surveyAPIResultCall);
};