import React, {useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Main_page_section.css'
import './Items_section.css'; 

function Items_section() {
    const videoSectionRef = useRef(null);

    useEffect(() => {
        const section = videoSectionRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-to-left');
                    entry.target.classList.remove('slide-out-to-right');
                }
                else 
                {
                    entry.target.classList.add('slide-out-to-right');
                    entry.target.classList.remove('slide-in-to-left');
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
        <section className="main-page-section" ref={videoSectionRef}>
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

export default Items_section;
