import React, { useContext, useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import axios from 'axios';
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import './PageHeader.css'
import "bootstrap/dist/css/bootstrap.css";

function PageHeader() {

  return (
    <div className="header-style">
      <Container>
        <Row>
          <Col className="header-logo">
            <h3>TaxSim</h3>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <h3>Calculadora</h3>
          </Col>
          <Col>
            <h3>Investimentos</h3>
          </Col>
        </Row>
      </Container>
    </div>

  );
}


export default PageHeader;
