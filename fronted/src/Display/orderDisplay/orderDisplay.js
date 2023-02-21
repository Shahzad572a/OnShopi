import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import { Form, Button,Row, Col, ListGroup,Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import{orderDeatilsAction} from '../../action/orderAct'
import Message from '../../component/message'
import Loader from '../../component/message'
import { Link } from 'react-router-dom'

const OrderDisplay = () => {
    debugger
    const params = useParams();
    const dispatch = useDispatch()
     
    
        const orderDetils =useSelector(state => state.orderDetils)
        const {order ,loading ,error} =orderDetils

        useEffect(()=>{
            dispatch(orderDeatilsAction(params.id))
        },[ dispatch,params.id])

     

  return  
    loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
       <h1>Order {order}</h1>
       <Row>
        
        <Col md={8} className='border border-info rounded-2' >
            <ListGroup variant='flush' className="text-dark">
                <ListGroup.Item >
                    <h2>Shipping</h2>
                    <div className='text-dark'>
                    <p><strong>Address: </strong>
                    {order.shippingAddr.address }, 
                    {order.shippingAddr.postalCode},
                    {order.shippingAddr.country },
                    </p>
                    <p><strong>Contact Number: </strong>
                    {order.shippingAddr.phoneNumber }, 
                    </p>
                    {order.isDelivered?(
                            <Message variant='success'> Delivered on {order.paidAt}</Message>
                        )  :(
                            <Message variant='danger'>Not Delivered</Message>
                        )}
                    </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>
                        <div className='text-dark'>
                        {order.payment}
                        </div>

                        {order.isPaidc?(
                            <Message variant='success'> Paid on {order.paidAt}</Message>
                        )  :(
                            <Message variant='danger'>Not Paid</Message>
                        )}

                    </ListGroup.Item>

                    <ListGroup.Item>
                        
                        <h2>Order Items</h2> 
                        {order.orderItems.length ===0 ? <Message>Your cart is empty</Message> :
                        <ListGroup variant='flush'>
                            {order.orderItems.map((item ,index) =>(
                              <ListGroup.Item key={index}>
                                <Row>

                                    <Col md={1}>
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
            <Card className='border border-info' >
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Ordery Sumary</h2>
                    </ListGroup.Item>  

                    <ListGroup.Item>
                        <Row>
                            <Col>Items</Col>
                            <Col>${order.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                 
                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping</Col>
                            <Col>${order.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Tax</Col>
                            <Col>${order.taxPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Total</Col>
                            <Col>${order.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                
                </ListGroup>
            </Card>
        </Col>
    </Row>
   
    </>
  )
}

export default OrderDisplay
