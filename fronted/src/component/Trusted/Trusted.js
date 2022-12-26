import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Trusted.css'
const Trusted = () => {
  return (
    <Container className=''>
    <div className="d-flex justify-content-center mt-4">
        <h3>Trusted By 1000+ Companies</h3>
        </div>
   <Row className=''>
    <Col className="slide">

            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
            </Col>
            <Col className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </Col>
          <Col className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </Col>
          <Col className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </Col>
          <Col className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </Col>
          </Row>

    </Container>
  )
}

export default Trusted
