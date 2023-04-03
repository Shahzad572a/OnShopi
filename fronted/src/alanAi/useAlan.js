import React,{useCallback, useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  {listProducts,listProductDetails} from  '../../src/action/productAct';
 

import alanBtn from '@alan-ai/alan-sdk-web';
import { useParams,useNavigate } from 'react-router-dom';
// import useHistory  from 'createBrowserHistory';
import { useLocation } from 'react-router-dom';
import { param } from 'express/lib/request';
 

const COMMANDS = {
    OPEN_CART:'open-cart',
    CLOSE_CART:'close-cart',
    ADD_ITEM: 'add-item',
    GET_PRODUCT_DETAILS: 'get-product-details',
}
const UseAlan = () => {
    debugger
    const params = useParams();
    const location = useLocation();
    // const history = useHistory();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productDetails = useSelector((state) => state.productDetails)
    const {  product } = productDetails
    
    

    const [alanInstance, setAlanInstance] = useState()
  

    const navigate = useNavigate();
    

    const openCart =useCallback(() =>{
        if (cartItems.length === 0) {
            alanInstance.playText('Your cart is empty Go Back');
            navigate('/cart/:id')
     } else {
            alanInstance.playText('Opening cart');
            navigate('/cart/:id')
          }
    },[alanInstance,navigate,cartItems])


    const closeCart =useCallback(() =>{

       if (location.pathname === '/cart/:id') {
       alanInstance.playText('Closing cart');
       navigate('/');
       } else {
      alanInstance.playText('Cart is already closed.');
      }
         
    },[alanInstance,navigate])



   

    const addItem = useCallback(({ detail: { name, quantity } }) => {
    if (!Array.isArray(products) || products.length === 0) {
        alanInstance.playText(`The product list is not available`);
        return;
    }

    const item = products.find(i => i.name.toLowerCase() === name.toLowerCase());

    if (!item) {
        alanInstance.playText(`I cannot find the ${name} item`);
        return;
    }

    // Here we pass in the product ID instead of the params ID
    dispatch(listProducts(params._id, quantity));
  
    navigate(`/cart/${params._id}?qty=${quantity}`);
    alanInstance.playText(`Add ${quantity} of the ${name} item to your cart`);
}, [alanInstance, dispatch, product])
        

const getProductDetails = useCallback(({ detail: { name } }) => {
    if (!Array.isArray(products) || products.length === 0) {
      alanInstance.playText(`The product list is not available`);
      return;
    }

    const item = products.find((i) => i.name.toLowerCase() === name.toLowerCase());

    if (!item) {
      alanInstance.playText(`I cannot find the ${name} item`);
      return;
    }

    if (!product._id || product._id !== item._id) {
      dispatch(listProductDetails(item._id));
      alanInstance.playText(`The details of ${item.name} are ${item.description}. The price is ${item.price} dollars`);
    }
  }, [alanInstance, products ]);

    // const openAbout =useCallback(() =>{
        
    //     alanInstance.playText('Opening About');
    //     navigate('/cart/:id')
    //  },[alanInstance,navigate])


       useEffect(()=>{
        window.addEventListener(COMMANDS.OPEN_CART, openCart)
        window.addEventListener(COMMANDS.CLOSE_CART, closeCart)
        window.addEventListener(COMMANDS.ADD_ITEM, addItem);
        window.addEventListener(COMMANDS.GET_PRODUCT_DETAILS, getProductDetails);


        
        return () => {
            window.removeEventListener(COMMANDS.OPEN_CART, openCart)
            window.removeEventListener(COMMANDS.CLOSE_CART, closeCart)
            window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
            window.removeEventListener(COMMANDS.GET_PRODUCT_DETAILS, getProductDetails);

        }
       },[openCart,closeCart,addItem])

    useEffect(() => {
        if(alanInstance != null) return

        setAlanInstance(
        alanBtn({ 
            left: "40px",
            top:"20px",
            // key: process.env.REACT_APP_ALAN_KEY ,
            key: '2510e829ab32070a9eda9fc966295a5e2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command,payload}) => {
                window.dispatchEvent(new CustomEvent(command,{detail :payload}))
                
            }
        })); 
      }, []);

 

  return null
}
export default UseAlan
