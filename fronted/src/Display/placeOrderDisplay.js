import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Form, Button,Row, Col, ListGroup,Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {createBrowserHistory} from 'history'
import FormContinar from '../component/Form/Forms'
import { shippingAddAct} from '../action/cartAct'
import{getCountryCode} from '../action/contryCodeAct'
import Checkout from '../component/checkout'
import Message from '../component/message'
import { Link } from 'react-router-dom'

const PlaceOrderDisplay = () => {
    const cart = useSelector((state) => state.cart)

  return (
    <>
    <Checkout s1 s2 s3 s4/>
    <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p><strong>Address: </strong>
                    {cart.shippingAddr.address }, 
                    {cart.shippingAddr.postalCode },
                    { cart.shippingAddr.country },
                    </p>
                    <p><strong>Contact Number: </strong>
                    {cart.shippingAddr.phoneNumber }, 
                    </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>
                        {cart.payment}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Order Items</h2>
                         
                        {cart.cartItems.length ===0 ? <Message>Your cart is empty</Message> :
                        <ListGroup variant='flush'>
                            {cart.cartItems.map((item ,index) =>(
                              <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                        <Image sr={item.image} alt={item.name} fluid rounded/> 
                                    </Col>
                                    <Col>
                                    <Link to={`/product/${item.product}`}>
                                        {item.name}
                                    </Link>
                                    </Col>
                                    <Col md={4}> 
                                    {item.qty} x ${item.price} =${item.qty * item.price}
                                    </Col>
                                </Row>
                              </ListGroup.Item> 
                            ))}
                        </ListGroup>
                        }
                    </ListGroup.Item>
            </ListGroup>

        </Col>
    </Row>
      
    </>
  )
}

export default PlaceOrderDisplay
