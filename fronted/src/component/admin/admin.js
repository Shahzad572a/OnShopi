import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { Nav,Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {logout} from '../../action/userAct'
 
// import { BsFillPeopleFill, BsBoxArrowInRight, BsListCheck } from 'react-icons/bs';
const Admin = () => {


    const history =useNavigate()
    const dispatch =useDispatch()
    const userLoginReducer = useSelector((state) => state.userLoginReducer)  
    const { userInfo } = userLoginReducer

    useEffect(()=>{ 
        if(userInfo) {  
        } else{
            history('/login')
        }
    },[userInfo,history])

  const logoutHandler = () =>{ 
    dispatch(logout())
  }
  return (
    <>
    

<div className="d-flex flex-column align-items-start justify-content-between bg vh-100 p-3">
  <Nav className="mb-5 flex-grow-1 flex-column">
    <Nav.Item>
      <LinkContainer to='/admin/userlist'>
        <Button variant="light" className="w-100 mb-2">
          <i className='me-2 fas fa-home'></i> 
          Users
        </Button>
      </LinkContainer> 
    </Nav.Item>
    <Nav.Item>
    <LinkContainer to='/admin/productlist'>
      <Button variant="light" className="w-100 mb-2">
        <i className='me-2 fas fa-home'></i> 
        Products
      </Button>
      </LinkContainer> 
    </Nav.Item>
    <Nav.Item>
    <LinkContainer to='/admin/orderlist'>
      <Button variant="light" className="w-100 mb-2">
        <i className='me-2 fas fa-home'></i> 
        Orders
      </Button>
      </LinkContainer> 
    </Nav.Item>
  </Nav>
   
  <LinkContainer to='/login'>
  <Button variant="outline-light" className="align-self-" onClick={logoutHandler}>Logout</Button>
  </LinkContainer> 
    
  </div>
 
</>
  
  )
}

export default Admin
