import React,{ useState ,useEffect} from 'react'
import Product from '../../component/Product/Product'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
 
const HomeDisplay = () => {
const [products, setProducts] =useState([])

useEffect(() => {
  const displayProducts = async () => {
    
    const {data} =await axios.get('/api/products')
    
    setProducts(data)
  }
  displayProducts()
},[])

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
