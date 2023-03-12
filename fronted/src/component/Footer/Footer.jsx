import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>{t("Copyright &right; OnShopi")}</Col>
          </Row>
        </Container>
        
    </footer>
  )
}

export default Footer
