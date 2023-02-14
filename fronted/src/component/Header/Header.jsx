import {LinkContainer} from 'react-router-bootstrap'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {logout} from '../../action/userAct'
import header from './Header.css'
const Header = () => {

  const dispatch =useDispatch()
  const userLoginReducer = useSelector((state) => state.userLoginReducer)  
  const { userInfo } = userLoginReducer  //we bring this data from reducer
 

  const logoutHandler = () =>{ 
    dispatch(logout())
  }
  return (
    <header>
        <Navbar bg="light" expand="lg" variant="light" collapseOnSelect>
       <Container>
        <LinkContainer to='/home'>
        <Navbar.Brand><h2>OnShopi</h2></Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='topComponent'>

          <LinkContainer to='/home'>
            <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/about'>
            <Nav.Link><i className='fas fa-regular fa-address-card'></i> About</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/'>
            <Nav.Link><i className='fas fa-brands fa-product-hunt'></i> Product</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/cart/:id'>
            <Nav.Link> <i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>

           {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <div className='text-secondary'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </div>
            </NavDropdown>
           ):
           <LinkContainer to='/login'>
           <Nav.Link> <i className='fas fa-user'></i>Sign In</Nav.Link>
           </LinkContainer>
           }


            </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
    </header>
  )
}

export default Header

