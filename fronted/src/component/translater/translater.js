import React from 'react'
import { useTranslation } from "react-i18next";
import LanguageSelect from '../LanguageSelect';
    
import { Container, Row, Col, Form } from "react-bootstrap";
    
     
const Translater = () => {
      const { t } = useTranslation();
       
      return (
        <Container fluid className="main">
          <Row>
            <Col className="language-select">
              <LanguageSelect />
            </Col>
          </Row>
          <Row>
            <Col className="App">
              <div className="example-text">
                <p>{t("hello_welcome_to_react")}</p>
                <p>{t("this_is_an_example")}</p>
                <Form.Group controlId="formName" className="field">
                  <Form.Label>{t("please_enter_name")}</Form.Label>
                  <Form.Control type="text" placeholder={t("enter_name")} />
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default Translater
