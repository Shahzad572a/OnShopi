import React, { useState, useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import FormContinar from '../../component/Form/Forms'
import {register } from '../../action/userAct'
import {createBrowserHistory} from 'history'

const Registertion = () => {
     const history = createBrowserHistory()
    const location = useLocation()
   
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [message, setMessage] = useState(null)
 
      const dispatch = useDispatch()
    debugger
      const userRegisterRed = useSelector((state) => state.registertion)  // registertion we bring this data from store this reducer "store in combineReducers" 
      const { loading, error, userInfo } = userRegisterRed    
    
      const redirect = location.search ? location.search.split('=')[1] : '/'
    
      useEffect(() => {
        if (userInfo) {
          history.push(redirect)
        }
      }, [userInfo, redirect,history])
    
      const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
          setMessage('Passwords do not match')
        } else {
          dispatch(register(name, email, password))
        }
      }
    
      return (
        <FormContinar>
          <h1>Sign Up</h1>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Button type='submit' variant='primary'>
              Register
            </Button>
          </Form>
    
          <Row className='py-3'>
            <Col>
              Have an Account?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                Login
              </Link>
            </Col>
          </Row>
        </FormContinar>
      )
    }

export default Registertion
