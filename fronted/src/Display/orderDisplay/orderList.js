import React, {  useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { Button,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import FormContinar from '../../component/Form/Forms'
import {adminorderListAct} from '../../action/orderAct'
import Paganation from '../../component/paganation/paganation'
const OrderList = () => {
    const history = useNavigate()
    const dispatch =useDispatch()
 
    const adminOrderList =useSelector((state) => state.adminOrderList)
    const {loading,error,orders, } = adminOrderList

    const userLoginReducer =useSelector((state) => state.userLoginReducer)
    const {userInfo} = userLoginReducer
    
     
   

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin) {
            dispatch(adminorderListAct())
        } else {
            history('/')
        } 
    },[dispatch,history])

     
  return (
    <>
     <Link to='/admin' className='btn btn-light my-3'>Go Back</Link>
    <FormContinar></FormContinar>
    <h1>Orders</h1>
    {loading ? <Loader/> :error ?<Message variant='danger'>{error}</Message>
    :(
        <>
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERE</th>
                    <th>Details</th>


                </tr>
            </thead>
            <tbody>
                {orders.map((order)=>(
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.user && order.user.name}</td>
                        <td>{order.createdAt && order.createdAt.substring(0,10)}</td>
                        <td>${order.totalPrice}</td>
<td>
  {order.isPaid ? (
    order.paidAt?.substring(0,10)
  ) : (
    <i className='fas fa-times' style={{color: 'red'}}></i>
  )}
</td>
<td>
  {order.isDelivered ? (
    order.deliveredAt?.substring(0,10)
  ) : (
    <i className='fas fa-times' style={{color: 'red'}}></i>
  )}
</td>
                        <td>
                            <LinkContainer to={`/order/${order._id}`}>
                                <Button variant='light' className='btn-sm me-2 '>
                                    Details
                                </Button>
                            </LinkContainer>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        {/* <Paganation pages={pages} page={page}/> */}
        </>
    )
    }
       
    </>
  )
}

export default OrderList
