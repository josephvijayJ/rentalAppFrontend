import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Container>
          <Row className="center">
            <Col>
              <span className=" banner-title">RentalMart</span>
              <br />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: '3rem',
                  color: 'lightblue',
                }}
              >
                Please Click on User to Sign up
              </span>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
