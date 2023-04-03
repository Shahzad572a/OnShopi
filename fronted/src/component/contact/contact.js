import React from "react";
import { Container, Form, Button, Row,Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t  } = useTranslation();

     
  return (
<>

    <h1 className='text-center'>{t('Contact US')}</h1>
    
   
      
     
      <Container className="mb-2 mt-1 d-flex align-items-center justify-content-center">
      <Form className="w-50" action='https://formspree.io/f/mgebzzqq' method="POST">
        <Form.Group controlId="userna me">
          <Form.Label className='mb-2 mt-1'>{t('Username')}</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder={t('Enter your username')}
            required
            autoComplete="off"
            className="d-inline-block"
            style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px',
                
             }}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className='mb-2 mt-1'>{t('Email address')}</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder={t("Enter your email")}
            autoComplete="off"
            style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px',
                
             }}
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label className='mb-2 mt-1'>{t('Message')}</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows='8'
            cols='8'
            placeholder={t("Enter your message")}
            required
            autoComplete="off"
            style={{
                borderColor:'#703670',
                borderWidth:'2px',
                borderRadius: '25px',
               
             }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-2' value='send'>
          {t('Send')}
        </Button>
      </Form>
    </Container>

    <iframe style={{
                borderColor:'#fff',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '8%'
                
             }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9241543207313!2d73.05216707635569!3d33.68502803702996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd916b82f59%3A0xdcb4b6f257eaac74!2sAllama%20Iqbal%20Open%20University%2C%20Islamabad%20Pakistan!5e0!3m2!1sen!2s!4v1678696665840!5m2!1sen!2s" 
    
      width="100%" 
      height="350" 
       
      allowFullscreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      
      >

      </iframe>
    
    </>
  )
}

export default Contact
