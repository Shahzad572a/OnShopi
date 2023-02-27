import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './custom.css';
const Search = () => {

    const history = useNavigate() 

    const [key ,setKey] =useState('')

    const submit = (e) => {
        e.preventDefault()
        if (key.trim()) {
          history(`/search/${key}`)
        } else {
          history.push('/')
        }
      }
  return (
    <Form onSubmit={submit} inline className='form-inline'>
      <Form.Group className="mr-2">
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKey(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      </Form.Group>
      <Button type='submit' variant='success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default Search
