import produce from 'immer';
import { FORM_USER_INFO, ADMIN_PASSWORD } from '../types';

const { FORM_USER_INFO_NAME, FORM_USER_INFO_EMAIL, FORM_USER_INFO_SATISFACTION, FORM_USER_INFO_POSITION, 
  FORM_USER_INFO_SALARY, FORM_USER_INFO_OPINION } = FORM_USER_INFO;

const { ADMIN_PASSWORD_INPUT } = ADMIN_PASSWORD;

export const SET_USER_INFO_NAME_EMAIL = 'SET_USER_INFO_NAME_EMAIL';
export const SET_USER_INFO_SATISFACTION = 'SET_USER_INFO_SATISFACTION';
export const SET_USER_INFO_POSITION_SALARY_OPINION = 'SET_USER_INFO_POSITION_SALARY_OPINION';
export const INITIALIZE_USERINPUT_DATA = 'INITIALIZE_USERINPUT_DATA';
export const SET_ADMIN_PASSWORD = 'SET_ADMIN_PASSWORD';
export const SURVEY_API_GET_REQUEST = 'SURVEY_API_GET_REQUEST';
export const SURVEY_API_GET_SUCCESS = 'SURVEY_API_GET_SUCCESS';
export const SURVEY_API_GET_FAILURE = 'SURVEY_API_GET_FAILURE';
export const SURVEY_API_POST_REQUEST = 'SURVEY_API_POST_REQUEST';
export const SURVEY_API_POST_SUCCESS = 'SURVEY_API_POST_SUCCESS';
export const SURVEY_API_POST_FAILURE = 'SURVEY_API_POST_FAILURE';
export const SURVEY_API_POST_RESULT_REQUEST = 'SURVEY_API_POST_RESULT_REQUEST';
export const SURVEY_API_POST_RESULT_SUCCESS = 'SURVEY_API_POST_RESULT_SUCCESS';
export const SURVEY_API_POST_RESULT_FAILURE = 'SURVEY_API_POST_RESULT_FAILURE';

// TextInput (Name, Email)
export const redux_SetUserInfoNameEmail = (inputData) => ({
  type : SET_USER_INFO_NAME_EMAIL, payload : inputData
});

// CheckBox (Satisfaction)
export const redux_SetUserInfoSatisFaction = (inputData) => ({
  type : SET_USER_INFO_SATISFACTION, payload : inputData
});

// TextInput (Position, Salary, Opinion)
export const redux_SetUserInfoPositionSalaryOpinion = (inputData) => ({
  type : SET_USER_INFO_POSITION_SALARY_OPINION, payload : inputData
});

export const redux_InitializeUserInputData = () => ({
  type : INITIALIZE_USERINPUT_DATA
});

export const redux_SetAdminPassword = (inputData) => ({
  type : SET_ADMIN_PASSWORD, payload : inputData
});

export const redux_SurveyAPIGetRequest = () => ({
  type : SURVEY_API_GET_REQUEST
});

export const redux_SurveyAPIGetSuccess = (dataFromServer) => ({
  type : SURVEY_API_GET_SUCCESS, payload : dataFromServer
});

export const redux_SurveyAPIGetFailure = (dataFromServer) => ({
  type : SURVEY_API_GET_FAILURE, payload : dataFromServer
});

export const redux_SurveyAPIPostRequest = () => ({
  type : SURVEY_API_POST_REQUEST
});

export const redux_SurveyAPIPostSuccess = (dataFromServer) => ({
  type : SURVEY_API_POST_SUCCESS, payload : dataFromServer
});

export const redux_SurveyAPIPostFailure = (dataFromServer) => ({
  type : SURVEY_API_POST_FAILURE, payload : dataFromServer
});

export const redux_SurveyAPIPostResultRequest = () => ({
  type : SURVEY_API_POST_RESULT_REQUEST
});

export const redux_SurveyAPIPostResultSuccess = (dataFromServer) => ({
  type : SURVEY_API_POST_RESULT_SUCCESS, payload : dataFromServer
});

export const redux_SurveyAPIPostResultFailure = (dataFromServer) => ({
  type : SURVEY_API_POST_RESULT_FAILURE, payload : dataFromServer
});

const initState = {
  user : {
    [FORM_USER_INFO_NAME] : '',
    [FORM_USER_INFO_EMAIL] : '',

    [FORM_USER_INFO_SATISFACTION] : '',
    [FORM_USER_INFO_POSITION] : '',
    [FORM_USER_INFO_SALARY] : '',
    [FORM_USER_INFO_OPINION] : ''
  },
  admin : {
    [ADMIN_PASSWORD_INPUT] : ''
  },
  survey : {
    surveyListStatus : {
      processing : false,
      processed : false,
      message : '',
      result : null
    },
    surveyDataStatus : {
      processing : false,
      processed : false,
      message : ''
    },
    surveyDataResultStatus : {
      processing : false,
      processed : false,
      message : '',
      result : null
    }
  }
};

export default function ducksReducer(state = initState, action){
  return produce(state, draft => {
    switch(action.type){
      case SET_USER_INFO_NAME_EMAIL:
        draft.user[action.payload.inputName] = action.payload.inputValue;
        break;
      case SET_USER_INFO_SATISFACTION:
        draft.user[FORM_USER_INFO_SATISFACTION] = action.payload;
        break;
      case SET_USER_INFO_POSITION_SALARY_OPINION:
        draft.user[action.payload.inputName] = action.payload.inputValue;
        break;
      case INITIALIZE_USERINPUT_DATA:
        Object.keys(FORM_USER_INFO).map((el) => {
          draft.user[el] = ""
        });
        break;
      case SET_ADMIN_PASSWORD:
        draft.admin[action.payload.inputName] = action.payload.inputValue;
        break;
      case SURVEY_API_GET_REQUEST:
        draft.survey.surveyListStatus = { ...draft.survey.surveyListStatus, processing : true, processed : false, message : 'Survey GET API Calling', result : null };
        break;
      case SURVEY_API_GET_SUCCESS:
        draft.survey.surveyListStatus = { ...draft.survey.surveyListStatus, processing : false, processed : true, message : action.payload.message, result : action.payload.value };
        break;
      case SURVEY_API_GET_FAILURE:
        draft.survey.surveyListStatus = { ...draft.survey.surveyListStatus, processing : false, processed : false, message : action.payload.message, result : action.payload.value };
        break;
      case SURVEY_API_POST_REQUEST:
        draft.survey.surveyDataStatus = { ...draft.survey.surveyDataStatus, processing : true, processed : false, message : 'Survey POST API Calling'};
        break;
      case SURVEY_API_POST_SUCCESS:
        draft.survey.surveyDataStatus = { ...draft.survey.surveyDataStatus, processing : false, processed : true, message : action.payload.message };
        break;
      case SURVEY_API_POST_FAILURE:
        draft.survey.surveyDataStatus = { ...draft.survey.surveyDataStatus, processing : false, processed : false, message : action.payload.message };
        break;
      case SURVEY_API_POST_RESULT_REQUEST:
        draft.survey.surveyDataResultStatus = { ...draft.survey.surveyDataResultStatus, processing : true, processed : false, message : 'Survey POST Result API Calling', result : null };
        break;
      case SURVEY_API_POST_RESULT_SUCCESS:
        draft.survey.surveyDataResultStatus = { ...draft.survey.surveyDataResultStatus, processing : false, processed : true, message : action.payload.message, result : action.payload.value };
        break;
      case SURVEY_API_POST_RESULT_FAILURE:
        draft.survey.surveyDataResultStatus = { ...draft.survey.surveyDataResultStatus, processing : false, processed : false, message : action.payload.message, result : action.payload.value };
        break;
      default:
        return state;
  }});
};
