import React, { useState, useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Form, Button, Row, Col,Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import FormContinar from '../../component/Form/Forms'
import {register } from '../../action/userAct'
import {createBrowserHistory} from 'history'
 import form from './form.css'
 import { useTranslation } from "react-i18next";
 import Cap from '../../component/helmet'
const Registertion = () => {
     const { t  } = useTranslation();
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
        <>
        <Cap title='Sign Up'/>
        <Card expand="lg" id='card'
        style={{
          height:'630px',
        }}
        >
        <FormContinar>
          <h1>{t('Sign Up')}</h1>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label className='mb-2 mt-1'>{t('Name')}</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='name'
                placeholder={t('Enter name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='email'>
              <Form.Label className='mb-2 mt-1'>{t('Email address')}</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='email'
                placeholder={t('Enter email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='password'>
              <Form.Label className='mb-2 mt-1'>{t('Password')}</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='password'
                placeholder={t('Enter password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='confirmPassword'>
              <Form.Label className='mb-2 mt-1'>{t('Confirm Password')}</Form.Label>
              <Form.Control
                style={{
                  borderColor:'#703670',
                  borderWidth:'2px',
                  borderRadius: '25px'
               }}
                type='password'
                placeholder={t('Confirm password')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Button type='submit' variant='primary' className='mt-2'>
              {t('Register')}
            </Button>
          </Form>
    
          <Row className='py-3'>
            <Col>
              {t('Have an Account')}?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                {t('Login')}
              </Link>
            </Col>
          </Row>
        </FormContinar>
        </Card>
        </>
      )
    }

export default Registertion
