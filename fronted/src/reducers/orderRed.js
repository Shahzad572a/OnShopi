import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_RESET,

    PAY_ORDER_REQUEST,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,
    PAY_ORDER_RESET,

    LIST_ORDER_REQUEST,
    LIST_ORDER_SUCCESS,
    LIST_ORDER_FAIL,

    ADMIN_ORDER_REQUEST,
    ADMIN_ORDER_SUCCESS,
    ADMIN_ORDER_FAIL

} from '../constants/oderCon.js'

export const orderReducer  = (state={} ,action) => {
   
  switch(action.type){
    case ORDER_REQUEST:
        return {loading : true}
    case ORDER_SUCCESS:
        return{
            loading:false,
            success: true,
            order:action.payload
        }    
    case ORDER_FAIL:
        return{
            loading:false,
            error:action.payload  
        }
        default:
    return state
  }
  
  
}

export const orderdeatilsReducer  = (state={loading: true, orderItems: [], shippingaddress: {}} ,action) => {
    switch(action.type){
      case   ORDER_DETAILS_REQUEST:
          return {
            ...state,
            loading : true}
      case   ORDER_DETAILS_SUCCESS:
          return{
              loading:false,
              order:action.payload
          }    
      case   ORDER_DETAILS_FAIL:
          return{
              loading:false,
              error:action.payload  
          }
      case  ORDER_DETAILS_RESET:
        return {}
          default:
      return state
    }
}

export const payorderReducer  = (state={} ,action) => {
    switch(action.type){
      case    PAY_ORDER_REQUEST:
          return {
            loading : true}
      case    PAY_ORDER_SUCCESS:
          return{
              loading:false,
              success:true
          }    
      case    PAY_ORDER_FAIL:
          return{
              loading:false,
              error:action.payload  
          }
      case PAY_ORDER_RESET:
                return {}
          default:
      return state
    }
}


// order list in user Profile
export const listOrderReducer  = (state={orders: []} ,action) => {
    switch(action.type){
      case   LIST_ORDER_REQUEST:
          return {
            loading : true}
      case   LIST_ORDER_SUCCESS:
          return{
              loading:false,
              orders: action.payload
          }    
      case   LIST_ORDER_FAIL:
          return{
              loading:false,
              error:action.payload  
          }
      case PAY_ORDER_RESET:
                return {}
          default:
      return state
    }
}


export const adminOrderlistReducer  = (state={orders: []} ,action) => {
    switch(action.type){
      case   ADMIN_ORDER_REQUEST:
          return {
            loading : true}
      case   ADMIN_ORDER_SUCCESS:
          return{
              loading:false,
              orders: action.payload
          }    
      case   ADMIN_ORDER_FAIL:
          return{
              loading:false,
              error:action.payload  
          }
       
          default:
      return state
    }
}