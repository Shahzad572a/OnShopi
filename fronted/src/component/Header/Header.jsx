import {LinkContainer} from 'react-router-bootstrap'
// import React,{useEffect,useState} from 'react'
// import {Route,Routes} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Navbar,Nav,Container, NavDropdown, } from 'react-bootstrap'
// import {useNavigate} from 'react-router-dom'
import {logout} from '../../action/userAct'
import Search from '../search/search'
// import Admin from '../admin/admin'
import header from './Header.css'
// import { render } from 'react-dom'

import { useTranslation } from "react-i18next";
import LanguageSelect from '../LanguageSelect';


const Header = () => {
  const { t  } = useTranslation();
    

  // const history =useNavigate()
  const dispatch =useDispatch()
  const userLoginReducer = useSelector((state) => state.userLoginReducer)  
  const { userInfo } = userLoginReducer  //// Get the user login state from the Redux store
 
  // Handle logout
  const logoutHandler = () =>{ 
    dispatch(logout())
  }


   return(
    <header >
        <Navbar bg="light" expand="lg" variant="light" collapseOnSelect className='mt-2 me-3 ms-3'
        style={{
        borderColor:'#703670',
        borderWidth:'0px',
        borderRadius: '30px'}}
        >
       <Container>
        <LinkContainer to='/home'>
        <Navbar.Brand><h2>{t('OnShopi')}</h2></Navbar.Brand>
        </LinkContainer>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
         <Search /> 
         
          <Nav className='topComponent'>
         
          <LinkContainer to='/home'>
            <Nav.Link><i className='fas fa-home'></i> {t("Home")}</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/about'>
            <Nav.Link><i className='fas fa-thin fa-address-card'></i> {t("About")}</Nav.Link>
            </LinkContainer>

             

            <LinkContainer to='/'>
            <Nav.Link><i className='fas fa-brands fa-product-hunt'></i> {t("Product")}</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/cart/:id'>
            <Nav.Link> <i className='fas fa-shopping-cart'></i>{t("Cart")}</Nav.Link>
            </LinkContainer>

            {userInfo ? (
          // If the user is logged in, show their name in a dropdown menu
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>{t("Profile")}</NavDropdown.Item>
            </LinkContainer>
        
            <LinkContainer to=''> 
            <NavDropdown.Item onClick={logoutHandler}>
              {t("Logout")}
            </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        ) : (
          // If the user is not logged in, show a login button
          <LinkContainer to='/login'>
            <Nav.Link>
              <i className='fas fa-user'></i> {t("Sign In")}
            </Nav.Link>
          </LinkContainer>
        )}

{userInfo && userInfo.isAdmin ? (
  // If the user is logged in as an admin, show admin-specific links
  <NavDropdown title='Admin' id='adminmenu'>
    <LinkContainer to='/admin/userlist'>
       
      <NavDropdown.Item>Users</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to='/admin/productlist'>
      <NavDropdown.Item>Products</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to='/admin/orderlist'>
      <NavDropdown.Item>Orders</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to='admin'>
      <NavDropdown.Item>admin</NavDropdown.Item>
    </LinkContainer>
  </NavDropdown>
) : null}


   
        


  {/* <Translater/> */}
  <LanguageSelect/>


            </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
    </header>
  )
}

export default Header

