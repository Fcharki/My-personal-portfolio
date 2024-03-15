import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../app.css';
import website from "../assets/img/website2.jpg";
import webapp from "../assets/img/webapp.jpg";

const Services = () => {
  const servicesData = [
    {
      title: 'Stunning Websites',
      description: 'Make your online presence shine with our responsive web design services.',
      source: website,
    },
    {
      title: 'User-friendly Web apps',
      description: 'Take your online strategy to the next level with our expertise in web app development.',
      source: webapp,
    },
  ];

  return (
    <Container className="service-box p-5 text-center my-3" id="services">
      <h2 className="underlined mx-2 h1 pt-3  mt-4" style={{ fontWeight: '500' }}>
        Services
      </h2>
      <span className="mb-3" id="explainer">
        Transform your vision into a captivating online experience.
      </span>
      <Row className="mt-3 color-blue">
        {servicesData.map((service, index) => (
          <Col key={index} size={12} md={6}className="mb-4">
            <div id="service-wrapper">
              <h4 className="h3 service-title">
                {service.title}
              </h4>
              <div><img src={service.source} className='services-img img-fluid' alt='service'/></div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
