import React from 'react'
import BFoter from '../BFooter/BFoter'
import HeroSection from '../heroSection/HeroSection'
function about() {
    const data ={
        name: 'OnShopi Store',
    }
    
  return (
    <div>
      <HeroSection myData={data}/>
      <BFoter/>
    </div>
  )
}

about.propTypes = {

}

export default about

