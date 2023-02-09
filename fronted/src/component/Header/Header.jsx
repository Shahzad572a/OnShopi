import {LinkContainer} from 'react-router-bootstrap'
import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import header from './Header.css'
const Header = () => {
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

            <LinkContainer to='/login'>
            <Nav.Link> <i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>

           

            </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
    </header>
  )
}

export default Header

