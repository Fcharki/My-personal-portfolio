import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-us.png";

import emailjs from '@emailjs/browser';
import '../app.css';

const Contact = () => {
  // const form = useRef();
  const[firstname, setFirstname]= useState('');
  const[lastname, setLastname]= useState('');
  const[email, setEmail]= useState('');
  const[message, setMessage]= useState('');


  const sendEmail = (e) => {
    e.preventDefault();
  
    // emailJS required ids
    const serviceId = 'service_srpbyry';
    const templateId = 'template_1546spf';
    const publicKey = 'n6wZWBh7iY9Jjkpv2';
  
    // create an object with the dynamic template params
    const templateParams = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      message: message,
    };
  
    // sending the email using the emailJs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result);
        setFirstname('');
        setLastname('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  
  
  return (
    <section id="connect" className="contact d-flex justify-content center align-items-center mt-5">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img id='contact-img' className="img-fluid" src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            <Row>
              <Col sm={6} size={12}>
                <span><h3 className="mt-5">Thank you for visiting </h3></span>
              </Col>
            </Row>
            <h2 id='context'>Contact us</h2>
            <form onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input name="firstName" value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder="First Name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input name="lastName" value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="Last Name"/>
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email Address"/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="2" value={message} onChange={(e)=>setMessage(e.target.value)} name="message" placeholder="Message"></textarea>
                  <button className="mx-2" type="submit"><span>Send</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
