import React from 'react'
import Servces from '../Services/Servces' 
import HeroSection from '../heroSection/HeroSection'
import Trusted from '../Trusted/Trusted'
import BFoter from '../BFooter/BFoter'
import TopProduct from '../topProduct/topProduct'
import {useParams} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Cap from '../helmet'


function HomeBtn() {
  const { key  } = useParams();

const data ={
    name: 'OnShopi',
}
  return (
    <>
     <Cap/>
    <div>
      <HeroSection myData={data}/>
      {!key && <TopProduct data={key}/>}
      {/* <Servces/> */}
      <Trusted/>
      <BFoter/>
    </div>
    
    </>
  )
}

HomeBtn.propTypes = {

}

export default HomeBtn

