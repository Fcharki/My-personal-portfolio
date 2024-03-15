import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../app.css';
import fe from  "../assets/certificates/Fadma-charki-intro-FE.jpg";
import python from  "../assets/certificates/CHARKIFADMA-Python-certificate_page-0001.jpg";
import js from  "../assets/certificates/CHARKIFADMA-Javascript-certificate_page-0001.jpg";
import be from  "../assets/certificates/FADMA-CHARKI-INTRO-BE.jpg";
import reactcert from "../assets/certificates/FADMA-CHARKI-ADV-REACT_page-0001.jpg";
import versionctrl from "../assets/certificates/FADMA-CHARKI-Version-control_page-0001.jpg";
import { ArrowUpCircle } from 'react-bootstrap-icons';
import { ArrowDownCircle } from 'react-bootstrap-icons';



export default function OnlineCert() {
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col size={4} sm={12}>
          <button type='submit' onClick={() => setClicked(!clicked)} id='certbtn'>Online Certificates<ArrowDownCircle height={20} size={24} className='mx-1 fw-bold'/>
          <ArrowUpCircle height={20} size={24} className='mx-0 fw-bold'/>
          </button>
        </Col>
      </Row>

      {clicked && (
        <>
          <Row className='slide-up-down p-2'>
            <Col size={4} sm={6}><img src={fe} className='my-2 mx-2' alt='frontend certificate' /></Col>
            <Col size={4} sm={6}><img src={be} className='my-2 mx-2'  alt='backend certificate' /></Col>
          </Row>
          <Row className='slide-up-down p-2'>
            <Col size={4} sm={6}><img src={versionctrl} className='my-2 mx-2'  alt='version control certificate' /></Col>
            <Col size={4} sm={6}><img src={reactcert} className='my-2 mx-2'  alt='advanced react certficate' /></Col>
          </Row>
          <Row className='slide-up-down p-2'>
            <Col size={4} sm={6}><img src={js} className='my-2 mx-2'  alt='javascript certificate' /></Col>
            <Col size={4} sm={6}><img src={python} className='my-2 mx-2'  alt='python certificate' /></Col>
          </Row>
        </>
      )}
    </Container>
  );
}
