import {createStore , combineReducers,applyMiddleware,} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productRed'
import {cartReducer} from './reducers/cartRed'
import { userLoginReducer,userRegisterRed,userDetailsRed,updateProfileRed } from './reducers/userRed'
import {contryCodereducer} from './reducers/contryCodeRed'
const reducer =combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userLoginReducer:userLoginReducer,
    registertion:userRegisterRed,
    userdetails:userDetailsRed,
    update:updateProfileRed,
    contryCode:contryCodereducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userloginFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const shippingAddFromStorage = localStorage.getItem('shippingAddr')
  ? JSON.parse(localStorage.getItem('shippingAddr'))
  : {}

const initialState ={
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddr:shippingAddFromStorage
      },
      userLogin :{   
        userInfo: userloginFromStorage 
      }
}

const middleware =[thunk]

const store =createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
