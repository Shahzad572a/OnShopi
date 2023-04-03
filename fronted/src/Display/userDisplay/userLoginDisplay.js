import React, { useState, useEffect } from 'react'
  import { Link ,useLocation,useNavigate} from 'react-router-dom'
  import { Form, Button, Row, Col ,Card,} from 'react-bootstrap'
  import { useDispatch, useSelector } from 'react-redux'
  // import {createBrowserHistory} from 'history'
  import Message from '../../component/message'
  import Loader from '../../component/loader'
  // import form from './form.css'
  import FormContinar from '../../component/Form/Forms'
  import { login } from '../../action/userAct'
  // import Svg from '../../component/Svg'
  // import logo from './image/quantum-gradient.svg'
import { useTranslation } from "react-i18next";
import Cap from '../../component/helmet'

const UserLoginDisplay = () => {
  const { t  } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const dispatch = useDispatch()
  
    const userLoginReducer = useSelector((state) => state.userLoginReducer)  
    const { loading, error, userInfo } = userLoginReducer  //we bring this data from store
  
    const redirect = location.search ? location.search.split('=')[1] : '/home'
    
    useEffect(() => {
      if (userInfo) {
        navigate(redirect)
      } 
    }, [ navigate,redirect,userInfo])
  
    const submitHandler = (e) => {
      e.preventDefault()
     
      dispatch(login(email, password))
     
    }
  


  
       



    return (
      <>
       <Cap title='Sign In'/>
     <Card expand="lg" id='card'
     style={{
      // backgroundImage:`url(${logo})`
    }}>
      <FormContinar id='for'>
        <h1>{t('Sign In')}</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label className='mb-2 mt-1'>{t('Email address')}</Form.Label>
            <Form.Control
              style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px',
                color: 'rgb(173 19 19)',
                backgroundColor: 'transparent',
                
               
             }}
              type='email'
              placeholder='Enter email'
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
                borderRadius: '25px',
                color: '#fff',
                backgroundColor: 'transparent',
               
             }}
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='primary' className='mb-2 mt-2'>
            {t('Sign In')}
          </Button>
        </Form>
  
        <Row className='py-3'>
          <Col>
            {t('New Customer')}?{' '}
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              {t('Register')}
            </Link>
          </Col>
        </Row>
      </FormContinar>
      </Card>


 
       
      </>
    )
  }

export default UserLoginDisplay
