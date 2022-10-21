import {Link} from 'react-router-dom'
import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../Rating/Rating'
const Product = ({data}) => {
  return (
    <Card className='my-3 p3 rounded example hoverable'>
        <Link to={`/product/${data._id}`}>
        <Card.Img src={data.image} varient='top'/>
        </Link>
        <Card.Body>
        <Link to={`/product/${data._id}`}>
        <Card.Title as='div' id='namess'>
          <strong>{data.name}</strong>
        </Card.Title>
        </Link>
        <Card.Text as='div'>
          
            <Rating value={data.rating} text={`${data.numReviews}  reviews`}  />
         
        </Card.Text>
        <Card.Text as='h3'>${data.price}</Card.Text>
        </Card.Body>
        </Card>
  )
}


export default Product
