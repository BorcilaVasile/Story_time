import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Movement_section.css';

function Movement_section() {

    const movementSectionRef = useRef(null);
    
    useEffect( () => {
    const section = movementSectionRef.current;
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-to-right');
                    entry.target.classList.remove('slide-out-to-left');
                }
                else {
                    entry.target.classList.add('slide-out-to-left');
                    entry.target.classList.remove('slide-in-to-right');
                }
            });
        }, options);

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section className="main-page-section" ref={movementSectionRef}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <div className="movement-wrapper">
                            <img src="https://via.placeholder.com/300" alt="Character" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Movement_section; 