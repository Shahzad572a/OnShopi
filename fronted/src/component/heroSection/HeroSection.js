import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container,Row,Col,Button,NavLink, Card,} from 'react-bootstrap'
import './heroSection.css'

const HeroSection = ({myData}) => {
  const {name} =myData
  return (
    <Container>
      <Row>
        <Col>
       <div className="d-grid grid-cols-2 gap-9">
          <div className="my-2">
            <p className="mb-0">Welcome to </p>
            <h1>{name}</h1>
            <p>
            The form of shopping in which people can easily purchase goods 
            and services by using the internet.Buyers can see a catalog of products or services 
            and electronically purchase them
            </p>
            <LinkContainer to='/'>
              <Button>show now</Button>
              </LinkContainer>
          </div>
          </div>
          </Col>
        <Col>
        <div className="flex w-100 p-3  h-auto items-center justify-center ">
            
              <img
                src="/image/hero.jpg"
                alt="hero-section-family"
                className="bg-image hover-zoom mw-100 shadow-none p-1 mb-5 bg-white rounded"/>
            </div>
        </Col>
      </Row>
      </Container>
  )
}

export default HeroSection
