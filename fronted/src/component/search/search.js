import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './custom.css';
import { useTranslation } from "react-i18next";
import Cap from '../helmet';

const Search = () => {
  const { t } = useTranslation();
  const history = useNavigate();

  const [key, setKey] = useState('');
  const [listening, setListening] = useState(false);

  const submit = (e) => {
    e.preventDefault()
    if (key.trim()) {
      history(`/search/${key}`)
    } else {
      history('/')
    }
  }

    
  const toggleListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onstart = () => {
      setListening(true);
      setKey(''); // clear the key state when starting to listen
    };
    recognition.onresult = (event) => {
      const spokenText = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setKey(spokenText);
      if (spokenText.trim()) {
        history(`/search/${spokenText.trim()}`);
      }
    };
    recognition.onend = () => {
      setListening(false);
    };
    recognition.start();
  };
  

  return (
    <>
    <Cap title='Searching'/>
    <Form onSubmit={submit} inline className='form-inline'>
      <Form.Group className="mr-2" >
      <Form.Control
        type='text'
        name='q'
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder={t('Search Products...')}
        className='mr-sm-2 ml-sm-5   '
        style={{
          borderColor: 'purple',
          borderWidth: '2.5px',
          borderStyle: 'solid',
        }}
      />
      </Form.Group>
      <Button
        type='button'
        variant='purple'
        className='p-2 btn-flat'
        style={{
          backgroundColor: 'purple',
          color: 'white',
        }}
        onClick={toggleListening}
      >
        {listening ? <i className="fas fa-thin fa-ear-listen"></i>: <i className='fas fa-solid fa-microphone'
      
      ></i>}
      </Button>

    
      
      <Button
        type='submit'
        variant='purple'
        className='p-2 btn-flat'
        style={{
          backgroundColor: 'purple',
          color: 'white',
        }}
      >
        {t("Search")}
      </Button>
    </Form>
    </>
  );
};

export default Search;