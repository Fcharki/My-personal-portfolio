import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/mylogo2.png';
import likedin from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github-mark-white.svg';
import {HeartFill} from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          <Col size={4} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={4} sm={4}><p id='copyright'>&copy;Fadma Charki 2024.</p></Col>
          <Col size={4} sm={4} className="text-center text-sm-end">
            <br/><div className="social-icon">
                      <a href="https://www.linkedin.com/in/fadma-c-0a4043293/" target='_blank'><img src={likedin} alt="linkedin logo" /></a>
                      <a href="https://github.com/Fcharki" target='_blank'><img src={github} alt="github logo" /></a>
            </div>
            <p id='change' className='fw-bold'>Be the change</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}