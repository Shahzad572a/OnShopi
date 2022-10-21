import React from 'react'
import propTypes from 'prop-types'

const Rating = ({text,value,color}) => {
  return (
    <div className='rating'>
    <span>
        <i style={{color}} className={value>=1 ? "fa-sharp fa-solid fa-star" : value>=0.5 ? "fa-regular fa-star-half-stroke" : "far fa-star"}> </i>
    </span>
    <span>
    <i style={{color}} className={value>=2 ? "fa-sharp fa-solid fa-star" : value>=1.5 ? "fa-regular fa-star-half-stroke" : "far fa-star"}> </i>
</span>
<span>
    <i style={{color}} className={value>=3 ? "fa-sharp fa-solid fa-star" : value>=2.5 ? "fa-regular fa-star-half-stroke" : "fa-light fa-star"}> </i>
</span>
<span>
    <i style={{color}} className={value>=4 ? "fa-sharp fa-solid fa-star" : value>=3.5 ? "fa-regular fa-star-half-stroke" : "far fa-star"}> </i>
</span>
<span>
    <i style={{color}} className={value>=5 ? "fa-sharp fa-solid fa-star" : value>=4.5 ? "fa-regular fa-star-half-stroke" : "far fa-star"}> </i>
</span>
<span>{text && text}</span>
</div>
  )
}
Rating.defaultProps ={
    color:'#f8e825',
}
Rating.propTypes={
    value: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    color: propTypes.string,
}
export default Rating
