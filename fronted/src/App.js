import React from 'react';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomeDisplay from './Display/HomeDisplay/HomeDisplay';
import ProductDisplay from './Display/ProductDisplay/ProductDisplay';
import HomeBtn from './component/HomeBtn/HomeBtn';
import About from './component/About/About'

const App = () => {
  return (
    <BrowserRouter>
      
     <Header />
     <main className='py-3'>
     <Container>
     <Routes>
        <Route path='/' element={<HomeDisplay/>} exact/>
        <Route path='/product/:id' element={<ProductDisplay/>} />
        <Route path='/home' element={<HomeBtn/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        </Routes>
      </Container>
      </main>
      
     <Footer/>
     
      </BrowserRouter>
  );
}

export default App;
