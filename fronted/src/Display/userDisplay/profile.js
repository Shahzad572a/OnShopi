import React, { useState, useEffect } from 'react'
import { Table,Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {createBrowserHistory} from 'history'
// import {useNavigate} from 'react-router-dom'
import Message from '../../component/message'
import Loader from '../../component/loader'
import {updatProfile,details} from '../../action/userAct'
// import { userDetailsRed } from '../../reducers/cartRed'
import { orderListAct } from '../../action/orderAct'
// import { UPDATE_PROFILE_RESET } from '../../constants/userCon'

const Profile = () => {
  
  // const navigate = useNavigate();
  const history =createBrowserHistory()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const[ _id, setId] = useState('')

  const dispatch = useDispatch()
 
  const userdetails = useSelector((state) => state.userdetails) 
  const { loading, error,  } = userdetails

  const userLoginReducer = useSelector((state) => state.userLoginReducer)
  const { userInfo } = userLoginReducer

  const update = useSelector((state) => state.update)
  const { success } = update

  const orderList = useSelector((state) => state.orderList)
  const { loading: loadingOrders, error: errorOrders, orders } = orderList

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
     else {
      if (!userInfo.name) {
        // dispatch({ type: UPDATE_PROFILE_RESET })
        dispatch(details(userInfo._id))
        dispatch(orderListAct())
      } 
      else 
      {
        setName(userInfo.name)
        setEmail(userInfo.email)
        setId(userInfo._id)
      }
    }
  }, [dispatch,history,userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updatProfile({ _id, name, email, password }))
    } 
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label className='mb-2 mt-1'>Name</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label className='mb-2 mt-1'>Email Address</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label className='mb-2 mt-1'>Password</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label className='mb-2 mt-1'>Confirm Password</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-2'>
              Update
            </Button>
          </Form>
        )}
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default Profile