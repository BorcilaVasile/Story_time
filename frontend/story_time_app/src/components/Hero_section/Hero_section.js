import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero_section.css'; 

function HeroSection() {
  return (
    <Container fluid className="hero-section">
      <Row className="align-items-center text-center">
        <Col>
          <h1 className="hero-title">Story time</h1>
          <p className="hero-subtitle">Make your own video quickly and easily</p>
          <div className="hero-buttons">
            <Button className="start_button"
            style= {{ width: '142px', 
                    height: '40px', 
                    backgroundColor: 'white',
                    color: 'black',
                    border: '2px solid #000000',
                    borderRadius: '8px'
            }}>Start</Button>
            <Button className='download_button'
            style= {{ width: '142px', 
                height: '40px', 
                backgroundColor: '#2C2C2C',
                color: 'white',
                border: '2px solid #ffffff',
                borderRadius: '8px',
                marginLeft: '20px'
        }}>Download</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
