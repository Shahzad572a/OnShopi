import React from 'react'
import {Helmet} from 'react-helmet'

const Cap = ({title,description,keyword}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='keyword' content={keyword}/>
    </Helmet>
  )
}
Cap.defaultProps ={
    title: 'Welcome to OnShopi ',
    description:'we sell best product',
    keyword: 'electronics, buy electronic'
}

export default Cap
