import axios from 'axios'
import {PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    REMOVED_PRODUCT_REQUEST,
    REMOVED_PRODUCT_SUCCESS,
    REMOVED_PRODUCT_FAIL,

    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,

    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET
} 
    from '../constants/productCon'

    export const listProducts =() => async (dispatch)=> {
        try {
            dispatch({
                type: PRODUCT_LIST_REQUEST,
            })
            const {data} = await axios.get('/api/products') 
            dispatch({
                type:PRODUCT_LIST_SUCCESS,
                payload :data
            })
        } catch (error) {
            dispatch({
                type:PRODUCT_LIST_FAIL,
                payload :error.response && error.response.data.message ?
                error.response.data.message
                :error.message
            })
        }


    }


    export const listProductDetails =(id) => async (dispatch)=> {
        try {
            dispatch({
                type: PRODUCT_DETAILS_REQUEST,
            })
            const {data} = await axios.get(`/api/products/${id}`) 
            dispatch({
                type:PRODUCT_DETAILS_SUCCESS,
                payload :data
            })
        } catch (error) {
            dispatch({
                type:PRODUCT_DETAILS_FAIL,
                payload :error.response && error.response.data.message ?
                error.response.data.message
                :error.message
            })
        }

    }


    // removed by admin 
    export const listProductRemoved =(id) => async (dispatch,getState)=> {
        try {
            dispatch({
                type: REMOVED_PRODUCT_REQUEST,
            })

            const { userLoginReducer} = getState()
      const {userInfo} = userLoginReducer
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
             await axios.delete(`/api/products/${id}`,config) 
            dispatch({type:REMOVED_PRODUCT_SUCCESS })
        } catch (error) {
            dispatch({
                type:REMOVED_PRODUCT_FAIL,
                payload :error.response && error.response.data.message ?
                error.response.data.message
                :error.message
            })
        }

    }


       // created by admin 
    export const listProductCreate = () => async (dispatch, getState) => {
        try {
        
          dispatch({
            type:  CREATE_PRODUCT_REQUEST,
          });
      
          const { userLoginReducer} = getState()
          const {userInfo} = userLoginReducer
      
          const config = {
            headers: {
             
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
      
          const { data } = await axios.post('/api/products', {}, config);
      
          dispatch({
            type:  CREATE_PRODUCT_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type:  CREATE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
          });
        }
      };

      // created by admin 
    export const listProductUpdate = (product) => async (dispatch, getState) => {
        try {
            
          dispatch({
            type:  UPDATE_PRODUCT_REQUEST,
          });
      
          const { userLoginReducer} = getState()
          const {userInfo} = userLoginReducer
      
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
      
          const { data } = await axios.put(`/api/products/${product._id}`, product, config);
      
          dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type:  UPDATE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
          });
        }
      };