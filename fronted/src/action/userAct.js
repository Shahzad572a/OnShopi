import axios from 'axios'
import {USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL,

        USER_LOGOUT,

        USER_REGISTER_REQUEST,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_FAIL,

        USER_DETAILS_REQUEST,
        USER_DETAILS_SUCCESS,
        USER_DETAILS_FAIL,
        USER_DETAILS_RESET,

        UPDATE_PROFILE_REQUEST,
        UPDATE_PROFILE_SUCCESS,
        UPDATE_PROFILE_FAIL,

       USER_LIST_REQUEST,
       USER_LIST_SUCCESS,
       USER_LIST_FAIL,
       USER_LIST_RESET,

       REMOVE_USER_REQUEST,
       REMOVE_USER_SUCCESS,
       REMOVE_USER_FAIL,

       UPDATE_USER_BY_ADMIN_REQUEST,
       UPDATE_USER_BY_ADMIN_SUCCESS,
       UPDATE_USER_BY_ADMIN_FAIL,
      //  UPDATE_USER_BY_ADMIN_RESET
      
      } 
        from '../constants/userCon.js'
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      )
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



  export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: USER_LIST_RESET })
  }


  export const register = (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        '/api/users',
        { name, email, password },
        config
      )
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const details = (id) => async (dispatch, getState) => {
     
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })
  
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/users/${id}`, config)
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      })
    }
  }
  

  export const updatProfile = (user) => async (dispatch, getState) => {
     
    try {
      dispatch({
        type: UPDATE_PROFILE_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(`/api/users/profile`, user, config)
  
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: message,
      })
    }
  }

  export const userListAction = (key='',pageNumber='') => async (dispatch, getState) => {
    
    try {
      dispatch({
        type: USER_LIST_REQUEST,
      })
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get(`/api/users?key=${key}&pageNumber=${pageNumber}`, config)
      dispatch({
        type: USER_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
       
      dispatch({
        type: USER_LIST_FAIL,
        payload: message,
      })
    }
  }


  export const removeUserAction = (id) => async (dispatch, getState) => {
     
    try {
      dispatch({
        type: REMOVE_USER_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
     await axios.delete(`/api/users/${id}`, config)
  
      
    dispatch({type:  REMOVE_USER_SUCCESS})
      
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
       
      dispatch({
        type:  REMOVE_USER_FAIL,
        payload: message,
      })
    }
  }

  export const updateUserAction = (user) => async (dispatch, getState) => {
    debugger
    try {
      dispatch({
        type: UPDATE_USER_BY_ADMIN_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = { 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(`/api/users/${user._id}`, user,config)
  
      dispatch({
        type: UPDATE_USER_BY_ADMIN_SUCCESS,
        payload: data,
      })
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
      dispatch({ type:  USER_DETAILS_RESET })
       
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      

          if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
      dispatch({
        type: UPDATE_USER_BY_ADMIN_FAIL,
        payload: message,
      })
    }
  }
