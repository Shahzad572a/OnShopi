import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SHIPPING_ADDR ,
  PAYMENT_METHOD
} from '../constants/cartCon'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
 
export const shippingAddAct = (data) => (dispatch,getState) => {
  dispatch({
    type: CART_SHIPPING_ADDR,
    payload: data,
  })

  localStorage.setItem('shippingAddr', JSON.stringify(getState(data)))
}

export const paymentMethAction= (data) => (dispatch,getState) => {
  dispatch({
    type: PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(getState(data)))
}


 