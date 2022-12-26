import React from 'react'
import Servces from '../Services/Servces' 
import HeroSection from '../heroSection/HeroSection'
import Trusted from '../Trusted/Trusted'

function HomeBtn() {
const data ={
    name: 'OnShopi',
}
  return (
    <div>
      <HeroSection myData={data}/>
      <Servces/>
      <Trusted/>
    </div>
    

  )
}

HomeBtn.propTypes = {

}

export default HomeBtn

