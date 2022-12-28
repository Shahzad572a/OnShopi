import React from 'react'
import { Button, Col,Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
    <Row className="text-center row">
        <Col className=" col-md-6">
            <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                className="img-fluid"/>
        </Col>
        <Col className=" col-md-6 mt-3">
            <h3 className="fs-3"> <h1 className="text-danger">Opps!</h1> Page not found.</h3>
            <p className="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <LinkContainer to='/home'>
             <Button>Go Home</Button>
            </LinkContainer>
            
        </Col>

    </Row>
</div>  
  )
}

export default Error
