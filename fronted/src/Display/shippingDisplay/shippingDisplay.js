import React, { useState, useEffect } from 'react'
import {useNavigate,Link } from 'react-router-dom'
import { Form, Button, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import {createBrowserHistory} from 'history'
import FormContinar from '../../component/Form/Forms'
import Message from '../../component/message'
import { shippingAddAct} from '../../action/cartAct'
// import{getCountryCode} from '../../action/contryCodeAct'
import Checkout from '../../component/checkout'
import { useTranslation } from "react-i18next";
const ShippingDisplay = () => {
  const { t  } = useTranslation();

  const history = useNavigate()
  
  const cart = useSelector((state) => state.cart)
  const { shippingAddr } = cart
  // const { countryCode, error } = useSelector((state) => state.countryCodeReducer);

  const userLoginReducer =useSelector((state) => state.userLoginReducer)
  const {userInfo} = userLoginReducer
 
    const [address, setAddress] = useState(shippingAddr.address)
    const [city, setCity] = useState(shippingAddr.city)
    const [postalCode, setPostalCode] = useState(shippingAddr.postalCode)
    const [country, setCountry] = useState(shippingAddr.country)
    const [phoneNumber, setPhoneNumber] = useState(shippingAddr.phoneNumber);
    const [vaild, setVaild] = useState(true)
  
    const dispatch = useDispatch()

   
    // useEffect(() => {
    //   if (phoneNumber.length === 10) {
    //     dispatch(getCountryCode(phoneNumber));
    //   }
    // }, [dispatch, phoneNumber]);
    useEffect(()=>{ 
      if(userInfo) {  
      } else{
          history('/login')
      }
  },[history,userInfo])

    const submitShipping =(e)=>{
      e.preventDefault()
      if (address && city && postalCode && country && phoneNumber){
        setVaild(true)  
        dispatch(shippingAddAct({address,city,postalCode,country,phoneNumber}))
        history('/payment')
      }else{
        setVaild(false)
        return
      }
      
     
    }
    
  return (
    <>
    <Link to='/cart/:id' className='btn btn-light my-3'>{t('Go Back')}</Link>
    <FormContinar>
      <Checkout s1 s2/>
      <h1>{t('Shipping Address')}</h1>
      {!vaild &&<Message>Form Must be Filled</Message>}
      <Form onSubmit={submitShipping}>
      <Form.Group controlId='address'>
              <Form.Label className='mb-2 mt-1'>{t('Address')}</Form.Label>
              <Form.Control
               style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px'
             }}
                type='text'
                placeholder={t('Enter address')}
                value={address}
                onChange={(e) =>{
                  setVaild(true) 
                  setAddress(e.target.value)
                } }>
                </Form.Control>
                
            </Form.Group>
     
       
      
      <Form.Group controlId='city'>
              <Form.Label className='mb-2 mt-1'>{t('City')}</Form.Label>
              <Form.Control
               style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px'
             }}
                type='text'
                placeholder={t('Enter city Name')}
                value={city}
                onChange={(e) => {
                  setVaild(true) 
                  setCity(e.target.value)
                } }
              ></Form.Control>
            </Form.Group>
      
      
      <Form.Group controlId='postalCode'>
              <Form.Label className='mb-2 mt-1'>{t('PostalCode')}</Form.Label>
              <Form.Control
              style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px'
             }}
                type='text'
                placeholder={t('Enter postalCode')}
                value={postalCode}
                onChange={(e) => {
                  setVaild(true) 
                  setPostalCode(e.target.value)
                } }
              ></Form.Control>
            </Form.Group>
      
      
      <Form.Group controlId='country'>
              <Form.Label className='mb-2 mt-1'>{t('Country')}</Form.Label>
              <Form.Control
               style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px'
             }}
                type='text'
                placeholder={t('Enter country Name')}
                value={country}
                onChange={(e) =>{
                  setVaild(true) 
                  setCountry(e.target.value)
                } }
              ></Form.Control>
            </Form.Group>
     
      
      <Form.Group controlId='phoneNumber'>
              <Form.Label className='mb-2 mt-1'>{t('PhoneNo')}</Form.Label>
              <Form.Control
               style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px'
             }}
                type='text'
                placeholder={t('Enter phone number')}
                value={phoneNumber}
                onChange={(e) => {
                  setVaild(true) 
                  setPhoneNumber(e.target.value)
                } }
              ></Form.Control>
            </Form.Group>
    
            <Button type='submit' variant='primary' className='mt-2 '
             style={{
              borderColor:'red',
              borderWidth:'2px',
             
           }}
            >
              {t('Contune')}
            </Button>
            </Form>
    </FormContinar>
    </>
  )
}

export default ShippingDisplay