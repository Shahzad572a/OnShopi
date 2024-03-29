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

        UPDATE_PROFILE_REQUEST,
        UPDATE_PROFILE_SUCCESS,
        UPDATE_PROFILE_FAIL,
        UPDATE_PROFILE_RESET,

        USER_LIST_REQUEST,
        USER_LIST_SUCCESS,
        USER_LIST_FAIL,
        USER_DETAILS_RESET,

        REMOVE_USER_REQUEST,
        REMOVE_USER_SUCCESS,
        REMOVE_USER_FAIL,

        UPDATE_USER_BY_ADMIN_REQUEST,
        UPDATE_USER_BY_ADMIN_SUCCESS,
        UPDATE_USER_BY_ADMIN_FAIL,
        UPDATE_USER_BY_ADMIN_RESET

      } 
        from '../constants/userCon'
        
        const userloginFromStorage = localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null
        const initialState = {
          userLogin: {
            userInfo: userloginFromStorage,
          },
        }
        
        export const userLoginReducer = (state = initialState.userLogin, action) => {
          switch (action.type) {
            case USER_LOGIN_REQUEST:
              return { loading: true }
            case USER_LOGIN_SUCCESS:
              localStorage.setItem('userInfo', JSON.stringify(action.payload))
              return { loading: false, userInfo: action.payload }
            case USER_LOGIN_FAIL:
              return { loading: false, error: action.payload }
            case USER_LOGOUT:
              localStorage.removeItem('userInfo')
              return {}
            default:
              return state
          }
        }

  export const userRegisterRed = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }

  export const userDetailsRed = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true }
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload }
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload }
       case USER_DETAILS_RESET:
         return { user: {} }
      default:
        return state
    }
  }

  export const updateProfileRed = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
        return { loading: true }
      case UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload }
      case UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      case UPDATE_PROFILE_RESET:
        return {}
      default:
        return state
    }
  }


  // user list by admin
  export const userListRed = (state = {users:[]}, action) => {
    switch (action.type) {
      case USER_LIST_REQUEST:
        return { loading: true }
      case USER_LIST_SUCCESS:
        return { loading: false, 
          users: action.payload.users,
          pages: action.payload.pages,
          page: action.payload.page,
         }
      case USER_LIST_FAIL:
        return { loading: false, error: action.payload }
        case USER_DETAILS_RESET:
        return {users:[]}
      default:
        return state
    }
  }

  // user delete by admin
  export const removeUserRed = (state = {}, action) => {
    switch (action.type) {
      case REMOVE_USER_REQUEST:
        return { loading: true }
      case REMOVE_USER_SUCCESS:
        return { loading: false, success:true }
      case REMOVE_USER_FAIL:
        return { loading: false, error: action.payload }
        
      default:
        return state
    }
  }

  // user update by admin
  export const updateUserRed = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_USER_BY_ADMIN_REQUEST:
        return { loading: true }
      case UPDATE_USER_BY_ADMIN_SUCCESS:
        return { loading: false, success:true }
      case UPDATE_USER_BY_ADMIN_FAIL:
        return { loading: false, error: action.payload }
      case UPDATE_USER_BY_ADMIN_RESET:
        return {}
      default:
        return state
    }
  }