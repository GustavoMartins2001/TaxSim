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
    <div className = "whiteCard">
      <form className = "main-form">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label for = "#valorInicial"><bold>Valor inicial</bold></label>
              <input id="valorInicial" className = "form-control"></input>
            </div>
            <div className="col-sm">
              <label for = "#valorInicial"><bold>Prazo</bold></label>
              <input id="valorInicial" className = "form-control"></input>
            </div>
            <div className="col-sm">
              <label for = "#valorInicial"><bold>Meses</bold></label>
              <input id="valorInicial" className = "form-control"></input>
            </div>
          </div>
          
        </div>
      </form>
    </div>
    </div>
    
    
  );
}


export default MainPage;
