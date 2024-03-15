import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/img/moon.png";
import art from "../assets/universe/art.webp";
import nature from "../assets/universe/nature.jpeg";
import space from "../assets/universe/space2.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import resume from "../FADMA-CHARKI-CV.pdf";
import TrackVisibility from 'react-on-screen';
import '../app.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["I'm a Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>{`Welcome! I'm Fadma`} <br/><span className="txt-rotate" id='greet' dataPeriod="1000" data-rotate='[ "Web Developer"]'><span className="wrap">{text}</span></span></h2>
                    <p id='intro'>
                    I’m a passionate web developer with a knack for turning ideas into beautiful digital experiences.I thrive on turning ideas into interactive, visually appealing online experiences.
                    Let’s bring your vision to life in the digital realm!.</p>
                    <a id="btn" href={resume} className="btn mb-1 fw-bold" download="Fadma-Charki-Cv.pdf" style={{textDecoration:"none"}}>Download my CV</a><br/>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                  <div>
                    <img className="mb-4 prophoto img-fluid" src={img}/>
                  </div>
            </Col>
          </Row>
          <Row className='pt-4'>
            <Row >
              <Col xs={12} md={12} xl={5}><h1 id="passion">My passions</h1>
              <p id='intro2'>My portfolio reflects my passion <br/>for art, space and nature.<br/>
              It showcases my dedication to capturing these elements in my work.</p></Col>
              <Row>
                <Col><span><p className="h2 my-3">Art</p><img className="passion" src={art}/></span></Col>
                <Col>
              <span><p  className="h2 my-3">Nature</p ><img className="passion" src={nature}/></span>
                </Col>
                <Col>
              <span><p  className="h2 my-3">Space</p><img className="passion" src={space}/></span>
                </Col>
              </Row>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  )
}
