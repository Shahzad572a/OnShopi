import React from 'react'
import BFoter from '../BFooter/BFoter'
import HeroSection from '../heroSection/HeroSection'
import Contact from '../contact/contact';
import Cap from '../helmet';
function about() {
    const data ={
        name: 'OnShopi Store',
    }
    
  return (
    <div>
      <Cap title='About'/>
      <HeroSection myData={data}/>
      <Contact/>
      <BFoter/>      
    </div>
  )
}

about.propTypes = {

}

export default about

