 
    import React, { useEffect ,useState} from 'react'
    import { Link ,useParams,useLocation,useNavigate} from 'react-router-dom'
    import { useDispatch, useSelector  } from 'react-redux'
    import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
    import {createBrowserHistory} from 'history'
    import Message from '../component/message'
    import { addToCart, removeFromCart  } from '../action/cartAct'
    import { useTranslation } from "react-i18next";
    import Cap from '../component/helmet'

const CartDisplay = () => {
      const { t  } = useTranslation();
      const params = useParams();
      const history = useNavigate ()
      const location = useLocation()

      const productId =  params.id
    
      const qty =location.search ? Number(location.search.split('=')[1]) :1
    
      const dispatch = useDispatch()
    
      const cart = useSelector((state) => state.cart)
      const { cartItems } = cart
    
      useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, qty))
        }
      }, [dispatch, productId, qty])
    
      const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
         
      }
   
      const checkoutHandler =()=>{
   history('/login?redirect=/shipping')
      //  console.log("checkout") 
      }
    
    // add currency 
      const [currency, setCurrency] = useState('USD');
  const currencies = {
    USD: '$',
    PKR: '₨',
    AED: 'د.إ',
    EUR: '€'
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
        <Cap title='Cart'/>
        <Row>
          <Col md={8}>
            <h1>{t("Shopping Cart")}</h1>
            {cartItems.length === 0 ? (
              <Message>
                 {t("Your cart is empty ")}<Link to='/'>{t("Go Back")}</Link>
              </Message>
            ) : (
              <ListGroup variant='flush'  className='flex p-2 border rounded-3 border-info border-4' 
              style={{
                borderColor:'#703670',
                backgroundColor: '#556fb7'
                
             }}>
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2} >
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                         className='text-dark'
                          as='select'
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card className=''>

              <ListGroup variant='flush' 
              style={{
      borderColor:'#703670',
      backgroundColor: '#556fb7'
      
   }}>
                <ListGroup.Item>
                  <h2>
                    {t("Subtotal")} ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                    {t("items")}
                  </h2>
                  {/* $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)} */}
                {currencies[currency]}
                   {convertCurrency(
                 cartItems.reduce((acc, item) => acc + item.qty * item.price, 0),
                'USD',
                currency
                ).toFixed(2)}
              <div>
            <select value={currency} onChange={handleCurrencyChange} className='bg-light text-dark'>
              <option value="USD">{t("USD")}</option>
              <option value="PKR">{t("PKR")}</option>
              <option value="AED">{t("AED")}</option>
              <option value="EUR">{t("EUR")}</option>
            </select>
          </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    {t("Proceed To Checkout")}
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        </>
      )
    
    }

export default CartDisplay
