import React, { useState, useEffect } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { Button,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import FormContinar from '../../component/Form/Forms'
import {userListAction,logout} from '../../action/userAct'

const UserList = () => {
    const history = useNavigate()
    const dispatch =useDispatch()
  debugger
    const userlist =useSelector((state) => state.userlist)
    const {loading,error,users} = userlist

    const userLoginReducer =useSelector((state) => state.userLoginReducer)
    const {userInfo} = userLoginReducer

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin) {
            dispatch(userListAction())
        } else {
            history('/')
        }
      
    },[dispatch])

    const deleteuser = () =>{
    dispatch(logout())
    }

  return (
    <>
    <h1>Users</h1>
    {loading ? <Loader/> :error ?<Message variant='danger'>{error}</Message>
    :(
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </td>
                        <td>
                        {user.isAdmin ? (
                                <i className='fas fa-check' style={{color: 'green' }}></i> 
                        ):(
                                <i className='fas fa-times' style={{color: 'red'}}></i>
                            )}
                        </td>
                        <td>
                            <LinkContainer to={`/user/${user._id}`}>
                                <Button variant='light' className='btn-sm me-2 '>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button variant='light' className='btn-sm ' 
                            onClick={() => deleteuser(user._id)}
                            >
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
    }
      
    </>
  )
}

export default UserList
