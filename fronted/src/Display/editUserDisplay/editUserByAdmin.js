import React, { useState, useEffect } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { Form, Button,} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import FormContinar from '../../component/Form/Forms'
import {details,updateUserAction} from '../../action/userAct'
import {UPDATE_USER_BY_ADMIN_RESET} from '../../constants/userCon'
 

const EditUserByAdmin = ( ) => {
 
    
    debugger
             const history = useNavigate()
             const params = useParams();
           
            
              const [name, setName] = useState('')
              const [email, setEmail] = useState('')
              const [isAdmin, setIsAdmin] = useState(false)
         
              const dispatch = useDispatch()
          
              const userdetails = useSelector((state) => state.userdetails)  // registertion we bring this data from store this reducer "store in combineReducers" 
              const { loading, error, user } = userdetails    

              const updateUser = useSelector((state) => state.updateUser)   
              const { loading:uLoading, error:uError, success:uSuccess } = updateUser  
            
              useEffect(() => {
                if(uSuccess){
                    dispatch({type:UPDATE_USER_BY_ADMIN_RESET})
                    history('/admin/userlist')
                } else{
                    if(!user.name || user._id !==params.id) {
                        dispatch(details(params.id))
                      }  else {
                        setName(user.name)
                        setEmail(user.email)
                        setIsAdmin(user.isAdmin)
                      }
                }
            
              },[user,dispatch,params.id,uSuccess])
            
              const submitHandler = (e) => {
                e.preventDefault()
                 dispatch(updateUserAction({_id:params.id, name, email, isAdmin}))
                 
              }
            
              return (
                <>
                {uLoading && <Loader/>}
                {uError && <Message variant='danger'>{uError}</Message>}

                <Link to='/admin/userlist' className='btn btn-light my-3'>Go Back</Link>
                <FormContinar>
                  <h1>User Edit</h1>
                  {loading ? <Loader/> :error ? <Message variant='danger'>{error}</Message>:
                  (
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
            
                    <Form.Group controlId='isAdmin'>
                      <Form.Check className='mb-2 mt-1'
                        style={{
                            borderColor:'#703670',
                            borderWidth:'2px',
                            borderRadius: '25px'
                         }}
                          type='checkbox'
                          label='isAdmin'
                          checked={isAdmin}
                          onChange={(e) => setIsAdmin(e.target.value)}   
                      >
                      </Form.Check>
                    </Form.Group>
            
                     
            
                    <Button type='submit' variant='primary' className='mt-2'>
                      Update
                    </Button>
                  </Form>
            
                  )}
                 
                </FormContinar>
                </>
              )
            }
        
      
    
    export default EditUserByAdmin
