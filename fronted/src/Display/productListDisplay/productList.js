import React, { useState, useEffect } from 'react'
import { Link,useLocation, useNavigate,useParams } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { Col,Row,Button,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../component/message'
import Loader from '../../component/loader'
import {CREATE_PRODUCT_RESET} from '../../constants/productCon'
import Paganation from '../../component/paganation/paganation'
 
import {  listProducts,listProductRemoved,listProductCreate} from '../../action/productAct'

const ProductList = () => {
    const history = useNavigate()
      
    const {pageNumber } = useParams();
    const currentPageNumber = parseInt(pageNumber) || 1;

    const dispatch =useDispatch()
   
    const productList =useSelector((state) => state.productList)
    const {loading,error,products,pages,page} = productList

    const userLoginReducer =useSelector((state) => state.userLoginReducer)
    const {userInfo} = userLoginReducer
    

    const removeProduct =useSelector((state) => state.removeProduct)
    const {loading:dLoading,error:DError,success:dSuccess} = removeProduct

    const createProduct = useSelector((state) => state.createProduct);
    const {
      loading: cLoading,
      error: cError,
      success: cSuccess,
      product: cProduct,
    } = createProduct;
   
   

    useEffect(()=>{
        dispatch({type:CREATE_PRODUCT_RESET})
        if(userInfo && userInfo.isAdmin) {
            dispatch(listProducts());
        } else{
            history('/login')
        }

        if (cSuccess) {
            history(`/admin/product/${cProduct._id}/edit`);
          } else {
            dispatch(listProducts('',currentPageNumber));
          }
    },[dispatch,history,userInfo,dSuccess,cProduct,currentPageNumber])

    const deleteuser = (id) =>{
        if(window.confirm('Are you delete the Product!'))
     dispatch(listProductRemoved(id))
    }

    const creatProduct =() => {
        
        dispatch(listProductCreate());  
        // setShowModal(false);
        // { name, price, image, brand, category, countInStock, description }
    }

  return (
    <>
     <Link to='/admin' className='btn btn-light my-3'>Go Back</Link>
     
    <Row className='align-items-center'>
    <Col>
    <h1>Products</h1>
    </Col>
    <Col className='text-right'>
        <Button className='my-3' onClick={creatProduct}>
           <i className='fas fa-plus'> </i>  Create Product
        </Button>
    </Col>
    </Row>

 {dLoading && <Loader/>}
 {DError && <Message>{DError}</Message>}

 {cLoading && <Loader/>}
 {cError && <Message>{DError}</Message>}


    {loading ? <Loader/> :error ?<Message variant='danger'>{error}</Message>
    :(
        <>
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button variant='light' className='btn-sm me-2 '>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button variant='light' className='btn-sm ' 
                            onClick={() => deleteuser(product._id)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Paganation pages={pages} page={page} isAdmin={true}/>
        </>
    )
    }
       
    </>
  )
}

export default ProductList
