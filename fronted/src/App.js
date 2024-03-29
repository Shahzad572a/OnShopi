import React from 'react';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomeDisplay from './Display/HomeDisplay/HomeDisplay';
import ProductDisplay from './Display/ProductDisplay/ProductDisplay';
 
import CartDisplay from './Display/cartDisplay';
import HomeBtn from './component/HomeBtn/HomeBtn';
import About from './component/About/About'
// import Contact from './component/contact/contact';

import Error from './component/Error/Error';
import PlaceOrderDisplay from './Display/placeOrderDisplay';
import PaymentDisplay from './Display/paymentDisplay';
import ShippingDisplay from './Display/shippingDisplay/shippingDisplay';
import Profile from './Display/userDisplay/profile';
import Registertion from './Display/userDisplay/registertion';
import UserLoginDisplay from './Display/userDisplay/userLoginDisplay';
import OrderDisplay from './Display/orderDisplay/orderDisplay';
import UserList from './Display/usersList/userList';
import EditUserByAdmin from './Display/editUserDisplay/editUserByAdmin';
import ProductList from './Display/productListDisplay/productList';
import ProductEditDisplay from './Display/productListDisplay/productEditDisplay';
import Admin from './component/admin/admin';
import OrderList from './Display/orderDisplay/orderList';

const App = () => {
   
  
   
  return (
    
    <BrowserRouter>
      
     <Header />
     <main className='py-3'>
     <Container style={{
          marginTop: '90px',
        }}>
     <Routes>
     <Route path='/order/:id' element={<OrderDisplay/>} exact/>
        <Route path='/placeOrder' element={<PlaceOrderDisplay/>} exact/>
        <Route path='/payment' element={<PaymentDisplay/>} exact/>
        <Route path='/shipping' element={<ShippingDisplay/>} exact/>
        <Route path='/login' element={<UserLoginDisplay/>} exact/>
        <Route path='/register' element={<Registertion/>} exact/>
        <Route path='/profile' element={<Profile/>} exact/>
        <Route path='/home' element={<HomeBtn/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        {/* <Route path='/contact' element={<Contact/>} exact/> */}
        <Route path='/product/:id' element={<ProductDisplay/>} />
        <Route path='/cart/:id' element={<CartDisplay/>} />

        <Route path='/admin/userlist' element={<UserList/>} />
        <Route path='/admin/userlist/:pageNumber' element={<UserList/>} />
        <Route path='/admin/user/:id/edit' element={<EditUserByAdmin/>} />

        <Route path='/admin/productlist' element={<ProductList/>} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductList/>} />
        <Route path='/admin/product/:id/edit' element={<ProductEditDisplay/>} />

        <Route path='/admin/orderlist' element={<OrderList/>} exact/>

        <Route path='/' element={<HomeDisplay/>} exact/>
        <Route path='/search/:key' element={<HomeDisplay/>} exact/>
        <Route path='/page/:pageNumber' component={<HomeDisplay/>} exact/>
        <Route path='/search/:key/page/:pageNumber' component={<HomeDisplay/>}  exact />

       
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<Error/>} exact/>
        </Routes>
      </Container>
      </main>
      
     <Footer/>
     
      </BrowserRouter>
      
  );
}

export default App;
