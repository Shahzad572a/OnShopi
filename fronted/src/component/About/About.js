import React from 'react'
import HeroSection from '../heroSection/HeroSection'
function about() {
    const data ={
        name: 'OnShopi Store',
    }
  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

about.propTypes = {

}

export default about

