import axios from 'axios'
import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    PAY_ORDER_REQUEST,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,

    LIST_ORDER_REQUEST,
    LIST_ORDER_SUCCESS,
    LIST_ORDER_FAIL,

    ADMIN_ORDER_REQUEST,
    ADMIN_ORDER_SUCCESS,
    ADMIN_ORDER_FAIL
} from '../constants/oderCon.js'
export const orderAction = (order) => async (dispatch, getState) => {
    
    try {
      dispatch({
        type: ORDER_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/orders`, order, config)
  
      dispatch({
        type: ORDER_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: ORDER_FAIL,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      })
    }
  }



  export const orderDeatilsAction = (id) => async (dispatch, getState) => {
    
    try {
      dispatch({
        type: ORDER_DETAILS_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders/${id}`, config)
  
      dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      })
    }
  }

  export const orderPayAct = (id,paymentResult) => async (dispatch, getState) => {
   
    try {
      dispatch({
        type: PAY_ORDER_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(`/api/order${id}/pay`,paymentResult, config)
  
      dispatch({
        type: PAY_ORDER_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: PAY_ORDER_FAIL,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      })
    }
  }




  export const orderListAct = () => async (dispatch, getState) => {
   debugger
    try {
      dispatch({
        type: LIST_ORDER_REQUEST,
      })
   
      const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders/myorders`, config)
  
      dispatch({
        type: LIST_ORDER_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: LIST_ORDER_FAIL,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      })
    }
  }

  export const adminorderListAct = () => async (dispatch, getState) => {
    debugger
     try {
       dispatch({
         type: ADMIN_ORDER_REQUEST,
       })
    
       const { userLoginReducer} = getState()
       const {userInfo} = userLoginReducer
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
         },
       }
   
       const { data } = await axios.get(`/api/orders`, config)
   
       dispatch({
         type: ADMIN_ORDER_SUCCESS,
         payload: data,
       })
      
     } catch (error) {
       dispatch({
         type: ADMIN_ORDER_FAIL,
         payload: 
         error.response && error.response.data.message
         ? error.response.data.message
         : error.message,
       })
     }
   }