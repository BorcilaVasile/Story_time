import React, {useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Luffy from '../../assets/luffy.jpg';
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
                    <Col md={12} lg={12}>
                        <div className="section-title">
                            Add various decorative items 
                        </div>
                        <div className="section-subtitle">
                            Create the perfect atmosphere for your story
                        </div>
                        <div className= "items-layout">
                            <div className= "items-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                <div className= "items-name">Luffy</div>
                                    <div className= "items-description">The rubber</div>
                                </div>
                            </div>
                            <div className= "items-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                    <div className= "items-name">Luffy</div>
                                    <div className= "items-description">The rubber</div>
                                </div>
                            </div>
                            <div className= "items-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                    <div className= "items-name">Luffy</div>
                                    <div className= "items-description">The rubber</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Items_section;
