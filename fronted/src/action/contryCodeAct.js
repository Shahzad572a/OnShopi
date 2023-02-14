import axios from "axios";
import {
    GET_COUNTRY_CODE_FAILURE,
    GET_COUNTRY_CODE_SUCCESS
} from '../constants/countryCode'
export const getCountryCodeSuccess = (data) => {
    return { type: GET_COUNTRY_CODE_SUCCESS, data };
  };
  
  export const getCountryCodeFailure = (error) => {
    return { type: GET_COUNTRY_CODE_FAILURE, error };
  };
  
  export const getCountryCode = (phoneNumber) => {
    return (dispatch) => {
      axios
        .get(`API_URL/${phoneNumber}`)
        .then((response) => {
          dispatch(getCountryCodeSuccess(response.data));
        })
        .catch((error) => {
          dispatch(getCountryCodeFailure(error));
        });
    };
  };