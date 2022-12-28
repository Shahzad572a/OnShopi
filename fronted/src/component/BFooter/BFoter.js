import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const BFoter = () => {
  return (
  
      <footer className="text-center text-lg-start mt-4 text-muted">
   
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-light">
     
    <div className="me-5 d-none d-lg-block">
      <span>Get connected and order your own prroduct:</span>
    </div>
    <Row className=''>
      <Col href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </Col>
      <Col href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </Col>
      <Col href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </Col>
      <Col href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </Col>
      <Col href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </Col>
      <Col href="https://github.com/Shahzad572a" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </Col>
    </Row>
    </section>
 

  
  <section className="border-bottom border-light">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>OnShopi
          </h6>
          <p>
          Whether you want to Buy products 
          down the street or around the world, we have all the tools you need.
          </p>
        </div>
         

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Mobile</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Bags</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laptop</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
          USEFUL LINKS
          </h6>
          
          <LinkContainer to='/'>
            <Nav.Link><i className='text-reset'></i>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to=''>
            <Nav.Link><i className='text-reset'></i>Settings</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
            <Nav.Link><i className='text-reset'></i>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
            <Nav.Link><i className='text-reset'></i>Help</Nav.Link>
            </LinkContainer>
        </div>
        

    
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> ISLAMABAD, IS 04403, PAK</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            shahzad572@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 92 325 861 9185</p>
          <p><i className="fas fa-print me-3"></i> + 92 325 861 9185</p>
        </div>
     
      </div>
     
    </div>
  </section>
 

  
  {/* <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> */}
 
</footer>
   
  )
}

export default BFoter
