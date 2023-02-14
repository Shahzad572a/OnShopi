import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Form, Button, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {createBrowserHistory} from 'history'
import FormContinar from '../component/Form/Forms'
import { shippingAddAct} from '../action/cartAct'
import{getCountryCode} from '../action/contryCodeAct'

const ShippingDisplay = () => {

  const history = useNavigate()
  
  const cart = useSelector((state) => state.cart)
  const { shippingAddr } = cart
  // const { countryCode, error } = useSelector((state) => state.countryCodeReducer);
 
    const [address, setAddress] = useState(shippingAddr.address)
    const [city, setCity] = useState(shippingAddr.city)
    const [postalCode, setPostalCode] = useState(shippingAddr.postalCode)
    const [country, setCountry] = useState(shippingAddr.country)
    const [phoneNumber, setPhoneNumber] = useState('');
   
  

     

    const dispatch = useDispatch()

    // useEffect(() => {
    //   if (phoneNumber.length === 10) {
    //     dispatch(getCountryCode(phoneNumber));
    //   }
    // }, [dispatch, phoneNumber]);


    const submitShipping =(e)=>{
      e.preventDefault()
     dispatch(shippingAddAct({address,city,postalCode,country}))
     history('/payment')
    }
  return (
    <FormContinar>
      <h1>Shipping Address</h1>
      <Form onSubmit={submitShipping}>
      <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
      </Form>

      
      <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>
      
      
      <Form.Group controlId='postalCode'>
              <Form.Label>PostalCode</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter postalCode'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>
      
      
      <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>
     
      
      <Form.Group controlId='phoneNumber'>
              <Form.Label>PhoneNo</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter phone number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Button type='submit' variant='primary'>
              Contune
            </Button>
    </FormContinar>
  )
}

export default ShippingDisplay
