import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Video.css'; 

function Video() {
    return (
        <section className="video-section">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <div className="video-wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/mjLSZ-K0kog?si=4bGa6OYB4aMjf_6Z" title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                        </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Video;
