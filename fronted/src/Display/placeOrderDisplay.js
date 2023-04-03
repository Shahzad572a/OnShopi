import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Form, Button,Row, Col, ListGroup,Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import{orderAction} from '../action/orderAct'
import Checkout from '../component/checkout'
import Message from '../component/message'
import { Link } from 'react-router-dom'

const PlaceOrderDisplay = () => {
    
    const history = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const addDecimals = (num) => {
     return (Math.round(num*100)/100).toFixed (2)
    }

    cart.itemsPrice =addDecimals(cart.cartItems.reduce((acc, item) =>
         acc + item.price * item.qty,0
    ))
    cart.shippingPrice =addDecimals(cart.itemsPrice > 100 ? 0 :100)
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed()))
    
    cart.totalPrice = (
        Number(cart.itemsPrice) + 
        Number(cart.shippingPrice)+ 
        Number(cart.taxPrice)).toFixed(2)
    
        const orderCreate =useSelector(state => state.orderCreat)
        const {order ,success ,error} =orderCreate

        useEffect(()=>{
            if (success) {
                history(`/order/${order._id}`)
            }
        },[history,success])

    const placeOrder =() =>{
        
        dispatch(
            orderAction({
        orderItems:cart.cartItems,
        shippingAddr:cart.shippingAddr,
        paymentMethod:cart.paymentMethod,
        shippingPrice:cart.shippingPrice,
        taxPrice:cart.taxPrice,
        totalPrice:cart.totalPrice
        }))
    }

  return (
    <>
    <Checkout s1 s2 s3 s4/>
    <Row>
        
        <Col md={8} className='flex p-2 border rounded-3 border-info border-4'
        style={{
            borderColor:'#703670',
            backgroundColor: '#556fb7'
            
         }}
        >
            <ListGroup variant='flush' className="text-dark">
                <ListGroup.Item >
                    <h2>Shipping</h2>
                    <div className='text-light'>
                    <p><strong>Address: </strong>
                    {cart.shippingAddr.address }, {cart.shippingAddr.city }{''},
                    {cart.shippingAddr.postalCode },
                    { cart.shippingAddr.country },
                    </p>
                    <p><strong>Contact Number: </strong>
                    {cart.shippingAddr.phoneNumber }, 
                    </p>
                    </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>
                        <div className='text-dark'>
                        {cart.payment}
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        
                        <h2>Order Items</h2> 
                        {cart.cartItems.length ===0 ? <Message>Your cart is empty</Message> :
                        <ListGroup variant='flush' className='flex p-2 border rounded-3 border-info border-2'>
                            {cart.cartItems.map((item ,index) =>(
                              <ListGroup.Item key={index}>
                                <Row>

                                    <Col md={1} >
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col>
                                    <Link to={`/product/${item.product}`}>
                                    <div className='text-dark'>
                                        {item.name}
                                        </div>
                                    </Link>
                                    </Col>

                                    <Col md={4}> 
                                    <div className='text-dark'>
                                    {item.qty} x ${item.price} =${item.qty * item.price}
                                    </div>
                                    </Col>

                                </Row>
                              </ListGroup.Item> 
                            ))}
                        </ListGroup>
                        }
                       
                    </ListGroup.Item>
                    
            </ListGroup>

        </Col>
         
        <Col md={4}>
            <Card className='flex p-2 border rounded-3 border-info border-4' 
            style={{
                borderColor:'#703670',
                backgroundColor: '#556fb7'
                
             }}
            >
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Ordery Sumary</h2>
                    </ListGroup.Item>  

                    <ListGroup.Item>
                        <Row>
                            <Col>Items</Col>
                            <Col>${cart.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                 
                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping</Col>
                            <Col>${cart.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Tax</Col>
                            <Col>${cart.taxPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Total</Col>
                            <Col>${cart.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        {error && <Message variant='danger'>{error}</Message>}
                    </ListGroup.Item>

                    <ListGroup.Item>
                            <Button type='button' 
                            className='btn-block' 
                            disabled={cart.cartItems=== 0} 
                            onClick={placeOrder}>Place Order</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
      
    </>
  )
}

export default PlaceOrderDisplay
