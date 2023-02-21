import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Form, Button, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {createBrowserHistory} from 'history'
import FormContinar from '../component/Form/Forms'
import {paymentMethAction} from '../action/cartAct'
//import{getCountryCode} from '../action/contryCodeAct'
import Checkout from '../component/checkout'

const PaymentDisplay = () => {

const history = useNavigate()
  
  const cart = useSelector((state) => state.cart)
  const { shippingAddr } = cart
   
  if(!shippingAddr){
    history.push('/shipping')
}
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    
    const dispatch = useDispatch()
    const submitPayment =(e)=>{
        e.preventDefault()
       dispatch(paymentMethAction(paymentMethod))
       history('/placeOrder')
    }
  return (
    <FormContinar>
      <Checkout s1 s2 s3/>
      <h1>Payment Method</h1>
      <Form onSubmit={submitPayment}>
      <Form.Group>
     <Form.Label as="legend">Select Method</Form.Label>
  
          <Col>
          <Form.Check
          type='radio'
          label='PayPal or credit card'
          id='PayPal'
          name='paymentMethod'
          value='PayPal'
          checked
          onChange={(e) =>setPaymentMethod(e.target.value)}>
          </Form.Check>
          <Form.Check
          type='radio'
          label='After Delevery'
          id='After Delevery'
          name='paymentMethod'
          value='After Delevery'
          checked
          onChange={(e) =>setPaymentMethod(e.target.value)}>
          </Form.Check>
          </Col>
          </Form.Group>
            <Button type='submit' variant='primary'>
              Contune
            </Button>
            </Form>
    </FormContinar>
  )
}

export default PaymentDisplay
