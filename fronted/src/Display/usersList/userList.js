import React, {  useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { Button,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import FormContinar from '../../component/Form/Forms'
import {userListAction,removeUserAction} from '../../action/userAct'
import Paganation from '../../component/paganation/paganation'
const UserList = () => {
    const history = useNavigate()
    const dispatch =useDispatch()
 
    const userlist =useSelector((state) => state.userlist)
    const {loading,error,users,pages,page} = userlist

    const userLoginReducer =useSelector((state) => state.userLoginReducer)
    const {userInfo} = userLoginReducer
    
    const  removeUser =useSelector((state) => state.removeUser)
    const {success:Delete } =  removeUser
   

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin) {
            dispatch(userListAction())
        } else {
            history('/')
        } 
    },[dispatch,Delete,history])

    const deleteuser = (id) =>{
        if(window.confirm('Are you delete the user!'))
    dispatch(removeUserAction(id))
    }

  return (
    <>
     <Link to='/admin' className='btn btn-light my-3'>Go Back</Link>
    <FormContinar></FormContinar>
    <h1>Users</h1>
    {loading ? <Loader/> :error ?<Message variant='danger'>{error}</Message>
    :(
        <>
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
                            <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                <Button variant='light' className='btn-sm me-2 '>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button variant='light' className='btn-sm ' 
                            onClick={() => deleteuser(user._id)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Paganation pages={pages} page={page}/>
        </>
    )
    }
       
    </>
  )
}

export default UserList
