import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './custom.css';
import { useTranslation } from "react-i18next";
const Search = () => {
    
    const { t  } = useTranslation();
    const history = useNavigate() 

    const [key ,setKey] =useState('')
   
    const submit = (e) => {
        e.preventDefault()
        if (key.trim()) {
          history(`/search/${key}`)
        } else {
          history('/')
        }
      }
  return (
    <Form onSubmit={submit} inline className='form-inline'>
      <Form.Group className="mr-2" >
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKey(e.target.value)}
        placeholder={t('Search Products...')}
        className='mr-sm-2 ml-sm-5   '
        style={{
          borderColor: 'purple',
           
          borderWidth: '2.5px',
          borderStyle: 'solid',
        }}
      ></Form.Control>
      </Form.Group>
      <Button type='submit' variant='purple' className='p-2 btn-flat  '
      style={{
        backgroundColor: 'purple',
        color: 'white',
      }}
      >
        {t("Search")}
      </Button>
    </Form>
  )
}

export default Search
