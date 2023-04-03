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
        UPDATE_PRODUCT_RESET,

        SORT_PRODUCT_REQUEST,
        SORT_PRODUCT_SUCCESS,
        SORT_PRODUCT_FAIL,

        CURRENCY_PRODUCT_REQUEST,
        CURRENCY_PRODUCT_SUCCESS,
        CURRENCY_PRODUCT_FAIL,

        REVIEW_PRODUCT_REQUEST,
        REVIEW_PRODUCT_SUCCESS,
        REVIEW_PRODUCT_FAIL,
        REVIEW_PRODUCT_RESET,

        TOP_PRODUCT_REQUEST,
        TOP_PRODUCT_SUCCESS,
        TOP_PRODUCT_FAIL,

        UPLOAD_IMAGE_REQUEST,
        UPLOAD_IMAGE_SUCCESS,
        UPLOAD_IMAGE_FAIL
      
      } 
        from '../constants/productCon'
export const productListReducer = (state = {products: []}, action) =>{
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products:[] };
        case PRODUCT_LIST_SUCCESS:
            return { 
              loading: false, 
              products:action.payload.products,
              pages: action.payload.pages,
              page: action.payload.page,
             };
  

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
  

  export const sortProductReducer = (state = {product:[]}, action) => {
    switch (action.type) {
      case SORT_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: '',
        };
      case  SORT_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case  SORT_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
 
  export const currencyReducer = (state = {product:[]} , action) => {
    switch (action.type) {
      case  CURRENCY_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true
        };
      case CURRENCY_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload
        };
      case  CURRENCY_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export const productReviewReducer = (state = {}, action) => {
     
    switch (action.type) {
     
      case REVIEW_PRODUCT_REQUEST:
        return { loading: true };
      case REVIEW_PRODUCT_SUCCESS:
        return { loading: false, success: true,   };
      case  REVIEW_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      case REVIEW_PRODUCT_RESET:
        return {product:{}}
      default:
        return state;
    }
  };

  // get top product by review 
  export const productTopReducer  = (state = { products: [] }, action) => {
    switch (action.type) {
      case  TOP_PRODUCT_REQUEST:
        return { loading: true, products: [] }
      case  TOP_PRODUCT_SUCCESS:
        return { loading: false, products: action.payload }
      case  TOP_PRODUCT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }



  const initialState = {
    loading: false,
    error: null,
    image: null,
  };
  
  export const uploadImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_IMAGE_REQUEST:
        return { ...state, loading: true };
      case UPLOAD_IMAGE_SUCCESS:
        return { loading: false, error: null, image: action.payload };
      case UPLOAD_IMAGE_FAIL:
        return { loading: false, error: action.payload, image: null };
      default:
        return state;
    }
  };