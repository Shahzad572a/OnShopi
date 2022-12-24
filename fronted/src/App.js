import React from 'react';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomeDisplay from './Display/HomeDisplay/HomeDisplay';
import ProductDisplay from './Display/ProductDisplay/ProductDisplay';


const App = () => {
  return (
    <BrowserRouter>
      
     <Header />
     <main className='py-3'>
     <Container>
     <Routes>
        <Route path='/' element={<HomeDisplay/>} exact/>
        <Route path='/product/:id' element={<ProductDisplay/>} />
        </Routes>
      </Container>
      </main>
     <Footer/>
     
      </BrowserRouter>
  );
}

export default App;
