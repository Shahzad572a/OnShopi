import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../../component/Product/Product'
import Message from '../../component/message'
import Loader from '../../component/loader'
import {Row,Col} from 'react-bootstrap'
import { listProducts } from '../../action/productAct'
  
const HomeDisplay = () => {
const dispatch = useDispatch()

const productList = useSelector((state) => state.productList)
 const {loading,error,products}= productList

useEffect(() => {
  dispatch(listProducts())
},[dispatch])

 

  return (
    <>
    <h1>Latest product</h1>
  
        
        {loading ? 
        (<Loader/> ):
        error ? 
        (<Message variant='danger'>{error}</Message>) :
        (<Row>
        {products.map((product =>(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product data={product}/>
 
         </Col>   
         )
         ))}
          </Row>)}
        
    </>
  )
}

export default HomeDisplay
