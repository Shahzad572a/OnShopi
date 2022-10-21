import React from 'react'
import products from '../../products'
import Product from '../../component/Product/Product'
import {Row,Col} from 'react-bootstrap'
 
const HomeDisplay = () => {

     
  return (
    <Row>
        <h1>Latest product</h1>
       {products.map((product =>(
        <Col key={product._id} md={6} sm={12} lg={4} xl={3}>
           <Product data={product}/>

        </Col>   

        
        )))}
         
    </Row>
  )
}

export default HomeDisplay
