import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

const Checkout = ({s1,s2,s3,s4}) => {
  const { t  } = useTranslation();
  return (
    <Nav className='just-content-center mb'>
      <Nav.Item>{s1 ?(
        <LinkContainer to='/login'>
          <Nav.Link>{t('Sign In')}</Nav.Link>
        </LinkContainer>
      ):(
        <Nav.Link disabled>Sign In</Nav.Link>
      )}
      </Nav.Item>

      <Nav.Item>{s2 ?(
        <LinkContainer to='/shipping'>
          <Nav.Link>{t('Shipping')}</Nav.Link>
        </LinkContainer>
      ):(
        <Nav.Link disabled>Shipping</Nav.Link>
      )}
      </Nav.Item>

      <Nav.Item>{s3 ?(
        <LinkContainer to='/payment'>
          <Nav.Link>{t('Payment')}</Nav.Link>
        </LinkContainer>
      ):(
        <Nav.Link disabled>Payment</Nav.Link>
      )}
      </Nav.Item>

      <Nav.Item>{s4 ?(
        <LinkContainer to='/placeOrder'>
          <Nav.Link>{t('Place Order')}</Nav.Link>
        </LinkContainer>
      ):(
        <Nav.Link disabled>Place Order</Nav.Link>
      )}
      </Nav.Item>
      
    </Nav>
  )
}

export default Checkout
