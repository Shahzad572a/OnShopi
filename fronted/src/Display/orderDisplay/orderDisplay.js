import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import { Row, Col, ListGroup,Image, Card, ListGroupItem } from 'react-bootstrap'
import {PayPalButton} from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import{orderDeatilsAction,orderPayAct} from '../../action/orderAct'
import Message from '../../component/message'
import Loader from '../../component/message'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PAY_ORDER_RESET } from '../../constants/oderCon'

const OrderDisplay = () => {
   
    const {id} = useParams();
    const dispatch = useDispatch()
      
    const [sdk , setSdk] = useState(false)    

       const orderPay =useSelector(state => state.orderPay)
       const { loading:loadPay,success} =orderPay

    
        const orderDetils =useSelector(state => state.orderDetils)
        const {order ,loading ,error} =orderDetils

        useEffect(()=>{
     const addPaypal =async () => {
        const {data: clientId} = await axios.get('/api/config/paypal')
        const script =document.createElement('script')
        script.type = 'text/javascript' 
        script.src =`https://www.paypal.com/sdk/js?client-id=${clientId}`
        script.async =true
        script.onload = () => {
         setSdk(true)
        }
        document.body.appendChild(script)
    }
     
  if(!order || success){
    dispatch({type:PAY_ORDER_RESET})
    dispatch(orderDeatilsAction(id))
  } else if(!order.isPaidc){
    if(!window.paypal){
        addPaypal()
    } else (
        setSdk(true)
    )
  }
        },[ dispatch,id,success,order])

     const paymentSuccess = (paymentResult) => {
        console.log(paymentResult)
        dispatch(orderPayAct(id, paymentResult))
      }

  return  (
    
    loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
       <h1>Order {order._id}</h1>
       <Row>
        
        <Col md={8} className='border border-info rounded-2' 
        style={{
            borderColor:'#703670',
            backgroundColor: '#556fb7'
            
         }}
        >
            <ListGroup variant='flush' className="">
                <ListGroup.Item >
                    <h2>Shipping</h2>
                   
              <strong>Name: </strong> {order.user.name} <br />
              <strong>Email: </strong>
              <a href={`mailto: ${order.user.email}`}>{order.user.email}</a>
 
                <div className='text-dark'>
                    <p><strong>Address: </strong>
                    {order.shippingAddress.address }, 
                    {order.shippingAddress.postalCode},
                    {order.shippingAddress.country },
                    </p>
                    <p><strong>Contact Number: </strong>
                    {order.shippingAddress.phoneNumber }, 
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
                        <ListGroup variant='flush'
                        style={{
                            borderColor:'#703670',
                            backgroundColor: '#556fb7'
                            
                         }}
                        >
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
            <Card className='border border-info'
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
                

                {!order.isPaidc && (
                 <div>
                 {loadPay && <Loader/>}
                 {!sdk ? (
              <PayPalButton
                amount={order.totalPrice}
                onSuccess={paymentSuccess} 
                 />
                ) : (
                <Loader/>
                 )}
    </div>
)}
                
                </ListGroup>
            </Card>
        </Col>
    </Row>
   
    </>
  )
  )
}

export default OrderDisplay
