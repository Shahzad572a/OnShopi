import React, { useState,useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import Product from '../../component/Product/Product'
import Message from '../../component/message'
import Loader from '../../component/loader'
import {Row,Col,} from 'react-bootstrap'
import { listProducts, } from '../../action/productAct'
import Sort from '../../component/sorting/sort'
import Paganation from "../../component/paganation/paganation";
 
 debugger

const HomeDisplay = () => {
   
   
  const { key,pageNumber } = useParams();
  const currentPageNumber = parseInt(pageNumber) || 1;
  const dispatch = useDispatch()
  

const productList = useSelector((state) => state.productList)
const {loading,error,products,page,pages}= productList

useEffect(() => {
  dispatch(listProducts(key,currentPageNumber))
},[dispatch,key,currentPageNumber])


 

  return (
    <>
    <h1>Latest product</h1>

    <>
    
    {/* <Sort searchKey={params.key} /> */}
        
        {loading ? 
        (<Loader/> ):
        error ? 
        (<Message variant='danger'>{error}</Message>) :
        (<Row>
        {products.map((product =>(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product data={product}/></Col>)))}
          </Row>)}
        <Paganation pages={pages} page={page}/>
    </>
 
 
    </> 
)
} 
 

export default HomeDisplay
