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
export const productListReducer = (state = {products: []}, action) =>{
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products:[] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products:action.payload };
            case PRODUCT_LIST_FAIL:
        return { loading: false, error:action.payload };
      default:
        return state;
    }
  }

  export const productDetailsReducer = (
    state = {product: {reviews: []}}, action
    ) =>{
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true, ...state };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product:action.payload };
            case PRODUCT_DETAILS_FAIL:
        return { loading: false, error:action.payload };
      default:
        return state;
    }
  }


   // removed by admin 
  export const productRemoveReducer = (
    state = {}, action
    ) =>{
    switch (action.type) {
      case REMOVED_PRODUCT_REQUEST:
        return { loading: true };
        case REMOVED_PRODUCT_SUCCESS:
            return { loading: false, success:true };
            case REMOVED_PRODUCT_FAIL:
        return { loading: false, error:action.payload };
      default:
        return state;
    }
  }

    // create by admin 
  export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_PRODUCT_REQUEST:
        return { loading: true };
      case CREATE_PRODUCT_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case CREATE_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

   // update  by admin 
   export const productUpadteReducer = (state = {product:{}}, action) => {
    switch (action.type) {
      case UPDATE_PRODUCT_REQUEST:
        return { loading: true };
      case UPDATE_PRODUCT_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case UPDATE_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      case UPDATE_PRODUCT_RESET:
        return {product:{}}
      default:
        return state;
    }
  };
  
  