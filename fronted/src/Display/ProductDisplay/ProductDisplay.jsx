import React, {useEffect,useState } from 'react'
import { Link ,useParams,useNavigate   } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../../component/Rating/Rating'
import Message from '../../component/message'
import Loader from '../../component/loader'
// import Meta from '../components/Meta'
import  {listProductDetails} from '../../action/productAct'


const ProductDisplay = () => {
  const [qty, setQty] = useState(1)
  // const [rating, setRating] = useState(0)
  // const [comment, setComment] = useState('')


  const params = useParams();
  const history = useNavigate()
  const dispatch = useDispatch()
   
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails


  useEffect(() => {
  
      dispatch(listProductDetails(params.id))
       }, [dispatch,params.id])
 
       const addToCartHandler = () => {
        history(`/cart/${params.id}?qty=${qty}`)
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
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
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
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
              <option value="AED">AED</option>
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
    </>
  )
}

 
  

export default ProductDisplay
