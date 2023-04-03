import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Dropdown, DropdownButton ,Col,Row,Button} from 'react-bootstrap';
import { sortProducts, listProducts } from '../../action/productAct'


import Loader from '../loader';
import Message from '../message';
import Paganation from "../../component/paganation/paganation";
import Product from '../Product/Product';
const Sort = ({ searchKey }) => {
   
  const dispatch = useDispatch()
  const { key,pageNumber } = useParams();
  const currentPageNumber = parseInt(pageNumber) || 1;
 
      
      const [sortBy, setSortBy] = useState('low');
      const [gridView, setGridView] = useState('grid'); 


      const productList = useSelector((state) => state.productList)
      const {products:lProduct,page,pages}= productList
      const sortProduct = useSelector((state) => state.sortProduct)
      const {loading,error}= sortProduct
    


      useEffect(() => {
        dispatch(listProducts(key,currentPageNumber))
      },[dispatch,key,currentPageNumber])
      
      
   

 useEffect(() => {
    dispatch(sortProducts(sortBy,searchKey),)
  },[dispatch ,sortBy,searchKey])
      const handleSortChange = (eventKey) => {
        setSortBy(eventKey);
      };
    
  let sortedProducts = [];
  if (lProduct) 
  {sortedProducts = [...lProduct].sort((a, b) => {
      if (sortBy === 'low') {
        return a.price - b.price;
      } else if (sortBy === 'high') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  } else {
    console.log('Products array is undefined');
  }
 
  const filteredProducts = searchKey
  ? sortedProducts.filter(product => product.name.toLowerCase().includes(searchKey.toLowerCase()))
  : sortedProducts;
 
  const handleGridView = (view) => {
    setGridView(view);
  };
  const handleListView = (view) => {
    setGridView(view);
  };




      return (
        <>
        <Row className='d-flex align-items-center'>
          <DropdownButton
            id="sort-dropdown"
            title="Sort By"
            onSelect={handleSortChange}
            className="mb-3 me-3"
            
          >
            <Dropdown.Item eventKey="low">Lowest Price</Dropdown.Item>
            <Dropdown.Item eventKey="high">Highest Price</Dropdown.Item>
          </DropdownButton>


    <div className='d-flex justify-content-end mb-3'>
      <Button
        className='me-3'
        variant={gridView === 'grid' ? 'primary' : 'secondary'}
        onClick={() => handleGridView('grid')}
      >
        <i className='fas fa-th-large'></i> Grid View
      </Button> 
      <Button
        variant={!gridView === 'list' ? 'primary' : 'secondary'}
        onClick={() => handleListView('list')}
      >
        <i className='fas fa-list'></i> List View
      </Button>
    </div>


 

        {loading   ? 
        (<Loader/> ):
        error ? 
        (<Message variant='danger'>{error}</Message>) :
        (
          <Row>
        {filteredProducts.map((product =>(
         <Col key={product._id} xs={gridView === 'grid' ? 3 : 8}>
          {/* sm={12} md={6} lg={4} xl={3} */}
            <Product data={product}/>
         </Col>   
         )
         ))}
          </Row>)}
       
          <Paganation pages={pages} page={page}/>
          
        </Row>
          
    </>
  );
    };

export default Sort
