import React from 'react'
import { Container,Row,Col,Button,NavLink, Card} from 'react-bootstrap'
import './ser.css'
function Servces() {
  return (
     <Container  className='contain border-bottom border-light'>
        <Row>
            <Col>
            <Card className='grid-cols-3 bg rounded p-4 m-4 flex font-italic'>
              <div  className='fas fa-regular fa-truck' id='icon'></div>
              <h4>Super Fast and Free Delivery</h4>
              </Card> 
            </Col>

            <Col>
            <Row>
            <Col>
            <Card className='grid-cols-3 bg rounded p-1 m-4 '>
              <div  className='fas fa-regular fa-dolly' id='icon2'></div>
              <h5>Non-contact Shipping</h5>
              </Card> 
            </Col>

                <Col>
            <Card className='grid-cols-3 bg rounded p-1 m-4'>
              <div  className='fas fa-duotone fa-money-check' id='icon2'></div>
              <h5>Money-back Guaranteed</h5>
              </Card> 
            </Col>
            </Row>
            </Col>

            <Col>
            <Card className='grid-cols-3 bg rounded p-4 m-4'>
              <div  className='fas fa-light fa-money-check-dollar' id='icon'></div>
              <h4>Super Secure Payment System</h4>
              </Card> 
            </Col>
        </Row>
     </Container>
  )
}

Servces.propTypes = {

}

export default Servces

