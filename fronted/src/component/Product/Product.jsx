import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../Rating/Rating'
const Product = ({data}) => {

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
   
    <Card className='my-3 p3 rounded example hoverable'>
        <Link to={`/product/${data._id}`}>
        <Card.Img src={data.image} varient='top'/>
        </Link>
        <Card.Body>
        <Link to={`/product/${data._id}`}>
        <Card.Title as='div' id='namess'>
          <strong className='text-secondary '>{data.name}</strong>
        </Card.Title>
        </Link>
        <Card.Text as='div'>
          
            <Rating value={data.rating} text={`${data.numReviews}  reviews`}  />
         
        </Card.Text>
        <div className='text-secondary '>
        <Card.Text as='h3'>
        {currencies[currency]}
              {convertCurrency(data.price, 'USD', currency)}
        </Card.Text>
        <div>
            <select value={currency} onChange={handleCurrencyChange} className='bg-light text-dark'>
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
              <option value="AED">AED</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        </Card.Body>
        </Card>
         
  )
}


export default Product
