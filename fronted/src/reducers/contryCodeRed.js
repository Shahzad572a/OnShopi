import {
    GET_COUNTRY_CODE_FAILURE,
    GET_COUNTRY_CODE_SUCCESS
} from '../constants/countryCode'

const initialState = {
    countryCode: '',
    error: '',
  };
  
  export const contryCodereducer =(state = initialState, action) =>{
    switch (action.type) {
      case GET_COUNTRY_CODE_SUCCESS:
        return {
          ...state,
          countryCode: action.data,
        };
      case GET_COUNTRY_CODE_FAILURE:
        return {
          ...state,
          error: action.error,
        };
      default:
        return state;
    }
  }