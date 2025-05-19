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
import "bootstrap/dist/css/bootstrap.css";
import "./MainPage.css"

function MainPage() {

  return (
    <div>
      <div className="welcome-message text-center">
      <h1>
        Bem vindo à melhor calculadora de investimentos online!
      </h1>
      <h4 className="fitContent">Se você precisa calcular juros compostos, taxas, inflação ou mesmo
        explorar os diferentes investimentos disponíveis no mercado, está no lugar
        certo.
      </h4> 
    </div>
    <div className="whiteCard">
      
    </div>
    </div>
    
    
  );
}


export default MainPage;
