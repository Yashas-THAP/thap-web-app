import { act } from 'react';
import { therapistUserActions } from '../reduxExports';

const therapistUserInitialState: TherapistUserState = {
  therapistLoader: false,
  therapistLanguages: [],
  therapistTherapyMethods: [],
  therapistCategories: [],
  therapistCutoffOptions: [],
  therapistIntro: '',
  therapistVideo: ''
}

const therapistUserReducer = (state: TherapistUserState = therapistUserInitialState, action: TherapistUserAction): TherapistUserState => {
    switch (action.type) {
      case therapistUserActions.SET_THERAPIST_USER_LOADER:
        return {
          ...state,
          therapistLoader: action.therapistLoader
        };
      case therapistUserActions.SET_THERAPIST_USER_DATA:
        return {
          ...state,
            therapistId : action.therapistId, 
            therapistName : action.therapistName,
            therapistDp: action.therapistDp,      
            therapistType : action.therapistType, 
            therapistRating : action.therapistRating,
            therapistLanguages : action.therapistLanguages,
            therapistTherapyMethods : action.therapistTherapyMethods,
            therapistCategories : action.therapistCategories,
            therapistCutoffOptions: action.therapistCutoffOptions,
            therapistIntro: action.therapistIntro,
            therapistVideo: action.therapistVideo
        }
      default:
        return state;
    }
  
  
  
  };
  
  export default therapistUserReducer;