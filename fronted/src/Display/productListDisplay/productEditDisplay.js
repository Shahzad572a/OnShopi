import axios from 'axios'
import React, { useState, useEffect } from 'react'
    import { Link,useParams,useNavigate } from 'react-router-dom'
    import { Form, Button,} from 'react-bootstrap'
    import { useDispatch, useSelector } from 'react-redux'
    import Message from '../../component/message'
    import Loader from '../../component/loader'
    import FormContinar from '../../component/Form/Forms'
    import {listProductDetails,listProductUpdate} from '../../action/productAct'
    import {UPDATE_PRODUCT_RESET} from '../../constants/productCon'
 
     

const ProductEditDisplay = () => {
    
     
       
                 const history = useNavigate()
                 const params = useParams();
               
                
                  const [name, setName] = useState('')
                  const [price, setPrice] = useState('')
                  const [image, setImage] = useState('')
                  const [brand, setBrand] = useState('')
                  const [category, setCategory] = useState('')
                  const [countInStock, setCountInStock] = useState(0)
                  const [description, setDescription] = useState('')
                  const [imageUpload, setImageUpload] = useState(false)
                  

             
                  const dispatch = useDispatch()
              
                  const productDetails = useSelector((state) => state.productDetails)  // registertion we bring this data from store this reducer "store in combineReducers" 
                  const { loading, error, product } = productDetails    
    
                  const updateProduct = useSelector((state) => state.updateProduct)  // registertion we bring this data from store this reducer "store in combineReducers" 
                  const { loading:uLoading, error:uError, success:uSuccess } = updateProduct    
    
                   
                
                  useEffect(() => {
                   if(uSuccess){
                    dispatch({type:UPDATE_PRODUCT_RESET})
                    history('/admin/productlist')
                   }else{
                    if(!product.name || product._id !==params.id) {
                      dispatch(listProductDetails(params.id))
                    }  else {
                      setName(product.name)
                      setPrice(product.price)
                      setImage(product.image)
                      setBrand(product.brand)
                      setCategory(product.category)
                      setCountInStock(product.countInStock)
                      setDescription(product.description)
                      
                    }
                   }
                  },[ dispatch,history,params.id,product,uSuccess])

                  const uploadimage = async (e) => {
                    const file = e.target.files[0]
                    const formData = new FormData()
                    formData.append('image', file)
                    setImageUpload(true)
                
                    try {
                      const config = {
                        headers: {
                          'Content-Type': 'multipart/form-data',
                        },
                      }
                
                      const { data } = await axios.post('/api/uploads', formData, config)
                
                      setImage(data)
                      setImageUpload(false)
                    } catch (error) {
                      console.error(error)
                      setImageUpload(false)
                    }
                  }
                
                  const submitHandler = (e) => {
                    e.preventDefault()
                     dispatch(listProductUpdate({_id:params.id, name, price, image,brand,category,countInStock,description}))
                     
                  }
                
                  return (
                    <>
                    {uLoading && <Loader/>}
                    {uError && <Message variant='danger'>{uError}</Message>}
    
                    <Link to='/admin/productlist' className='btn btn-light my-3'>Go Back</Link>
                    <FormContinar>
                      <h1>Product Edit</h1>
                      {loading ? <Loader/> :error ? <Message variant='danger'>{error}</Message>:
                      (
                        <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                          <Form.Label className='mb-2 mt-1'>Name</Form.Label>
                          <Form.Control
                            style={{
                              borderColor:'#703670',
                              borderWidth:'2px',
                              borderRadius: '25px'
                           }}
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                
                        <Form.Group controlId='price'>
                          <Form.Label className='mb-2 mt-1'>Price</Form.Label>
                          <Form.Control
                            style={{
                              borderColor:'#703670',
                              borderWidth:'2px',
                              borderRadius: '25px'
                           }}
                            type='number'
                            placeholder='Enter Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                
                        <Form.Group controlId='image'>
                        <Form.Label className='mb-2 mt-1'>Image</Form.Label>
                          <Form.Control className='mb-2 mt-1'
                            style={{
                                borderColor:'#703670',
                                borderWidth:'2px',
                                borderRadius: '25px'
                             }}
                              type='text'
                              placeholder='Enter image'
                              value={image}
                              onChange={(e) => setImage(e.target.value)}   
                          >
                          </Form.Control>
                          <Form.File id='image-file' label='Choose File' custom onChange={uploadimage}></Form.File>
                          {imageUpload && <Loader/>}
                        </Form.Group>

                        <Form.Group controlId='brand'>
                        <Form.Label className='mb-2 mt-1'>Brand</Form.Label>
                          <Form.Control className='mb-2 mt-1'
                            style={{
                                borderColor:'#703670',
                                borderWidth:'2px',
                                borderRadius: '25px'
                             }}
                              placeholder='Enter Brand'
                              type='text'
                              value={brand}
                              onChange={(e) => setBrand(e.target.value)}   
                          >
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='category'>
                        <Form.Label className='mb-2 mt-1'>Category</Form.Label>
                          <Form.Control className='mb-2 mt-1'
                            style={{
                                borderColor:'#703670',
                                borderWidth:'2px',
                                borderRadius: '25px'
                             }}
                              type='text'
                              placeholder='Enter category'
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}   
                          >
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='category'>
                        <Form.Label className='mb-2 mt-1'>CountInStock</Form.Label>
                          <Form.Control className='mb-2 mt-1'
                            style={{
                                borderColor:'#703670',
                                borderWidth:'2px',
                                borderRadius: '25px'
                             }}
                              type='number'
                              placeholder='Enter countInStock'
                              value={countInStock}
                              onChange={(e) => setCountInStock(e.target.value)}   
                          >
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='category'>
                        <Form.Label className='mb-2 mt-1'>description</Form.Label>
                          <Form.Control className='mb-2 mt-1'
                            style={{
                                borderColor:'#703670',
                                borderWidth:'2px',
                                borderRadius: '25px'
                             }}
                              type='text'
                              placeholder='Enter description'
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}   
                          >
                          </Form.Control>
                        </Form.Group>
                
                
                         
                
                        <Button type='submit' variant='primary' className='mt-2'>
                          Update
                        </Button>
                      </Form>
                
                      )}
                      
                    </FormContinar>
                    </>
                  )
                }
            
          
        
       
    

export default ProductEditDisplay
