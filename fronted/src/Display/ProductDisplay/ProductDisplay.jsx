import React, {useEffect,useState } from 'react'
import { Link ,useParams,useNavigate   } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../../component/Rating/Rating'
import Message from '../../component/message'
import Loader from '../../component/loader'
// import Meta from '../components/Meta'
import  {listProductDetails,rewiewProductAct} from '../../action/productAct'
import { useTranslation } from "react-i18next";
import { REVIEW_PRODUCT_RESET} from '../../constants/productCon'
import Cap from '../../component/helmet'



const ProductDisplay = () => {

  const [isHovered, setIsHovered] = useState(false);
  const cardStyles = {
    overflow: 'hidden',
    position: 'relative',
  };
  const imgStyles = {
    transition: 'transform .5s ease',
    position: 'relative',
    zIndex: 1,
  };
  const imgHoverStyles = {
    transform: 'scale(1.2)',
    zIndex: 2,
  };
 
  const { t  } = useTranslation();
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
 
  const params = useParams();
  const history = useNavigate()
  const dispatch = useDispatch()
   
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails


  const userLoginReducer = useSelector((state) => state.userLoginReducer)
  const { userInfo } = userLoginReducer

  const productReview = useSelector((state) => state.productReview)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReview

  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !==  params.id) {
      dispatch(listProductDetails(params.id))
      dispatch({ type: REVIEW_PRODUCT_RESET })
    }
  }, [dispatch, params.id, successProductReview])

  const addToCartHandler = () => {
    history(`/cart/${params.id}?qty=${qty}`)
  }


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      rewiewProductAct(params.id, {
        rating,
        comment,
      })
    )
  }
       
 
       
   
      // different currency
      const [currency, setCurrency] = useState('USD');
      const currencies = {
        USD: '$',
        PKR: '₨',
        AED: 'د.إ',
      };
      const convertCurrency = (price, fromCurrency, toCurrency) => {
        if (fromCurrency === toCurrency) {
          return price;
        }
        const conversionRates = {
          USD: {
            PKR: 0.004,
            AED: 0.022,
            EUR: 0.83,
          },
          EUR: {
            USD: 1.21,
            PKR: 198.16,
            AED: 4.44,
          },
          PKR: {
            USD: 250,
            AED: 0.056,
            EUR: 0.005,
          },
          AED: {
            USD: 3.67,
            PKR: 17.89,
            EUR: 0.23,
          },
          
        };
        const convertedPrice = price / conversionRates[fromCurrency][toCurrency];
        return parseFloat(convertedPrice.toFixed(2));
      };
      const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
      };

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        {t("Go Back")}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Cap title={product.name}/>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid className='rounded shadow'
              style={isHovered ? { ...imgStyles, ...imgHoverStyles } : imgStyles}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush' >
                <ListGroup.Item className='text-dark'>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row  className=''>
                      <Col>Price:</Col>
                      <Col >
                        <strong>{currencies[currency]}
              {convertCurrency(product.price, 'USD', currency)}</strong>
              <div >
            <select value={currency} onChange={handleCurrencyChange} className='bg-light text-dark'>
              <option value="USD">{t("USD")}</option>
              <option value="PKR">{t("PKR")}</option>
              <option value="AED">{t("AED")}</option>
              <option value="EUR">{t("EUR")}</option>
            </select>
          </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control className='text-dark'
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

               
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>   
        </>
      )}



<Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant='success'>
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                        className='bg-light text-dark'
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
    </>
  )
}

 
  

export default ProductDisplay
