import React, { useEffect } from 'react';
import Message from '../message';
import Loader from '../loader';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { topProductsAct } from '../../action/productAct';
import { useDispatch, useSelector } from 'react-redux';
import topProduct from './topProduct.css'

const TopProduct = ({data}) => {
  const dispatch = useDispatch();

  const topProduct = useSelector((state) => state.topProduct);
  const { loading, error, products } = topProduct;

  useEffect(() => {
    dispatch(topProductsAct(data));
  }, [dispatch,data]);

  return  loading ? (
   <Loader />
 ) : error ? (
   <Message variant='danger'>{error}</Message>
 ) : (
   <Carousel pause='hover' className='' 
   style={{
     borderColor:'#703670',
     backgroundColor: '#556fb7'
     
  }}
   >
     {products.map((product) => (
       <Carousel.Item key={product._id}>
         <Link to={`/product/${product._id}`}>
         <div style={{ width: '100%', height: '30rem', overflow: 'hidden',zIndex: 0, 
    position: 'relative' }}>
         <Image src={product.image} alt={product.name} fluid  style={{ transform: 'rotateZ(-5deg) translateY(-4rem) translateX(-1rem)', width: '100%', height: '100%',objectFit: 'cover' }} />
         </div>
            

           <Carousel.Caption className='carousel-caption'>
             <h2>
               {product.name} (${product.price})
             </h2>
           </Carousel.Caption>
         </Link>
       </Carousel.Item>
     ))}
   </Carousel> 
 
 )
     }
  

export default TopProduct;

