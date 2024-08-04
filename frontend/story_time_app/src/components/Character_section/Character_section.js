import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Main_page_section.css';
import './Character_section.css';
import Luffy from '../../assets/luffy.jpg';

function Character_section() {

    const characterSectionRef = useRef(null);
    
    useEffect( () => {
    const section = characterSectionRef.current;
        
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
                else {
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
        <section className="main-page-section" ref={characterSectionRef}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={12}>
                        <div className="section-title">
                            Choose your characters
                        </div>
                        <div className="section-subtitle">
                            Choose the characters that will bring out the best of your story
                        </div>
                        <div className='character-layout'>
                            <div className="character-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                    <div className="character-name">Luffy</div>
                                    <div className="character-description">The rubber boy</div>
                                </div>
                            </div>
                            <div className="character-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                    <div className="character-name">Luffy</div>
                                    <div className="character-description">The rubber boy</div>
                                </div>
                            </div>
                            <div className="character-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                    <div className="character-name">Luffy</div>
                                    <div className="character-description">The rubber boy</div>
                                </div>
                            </div>
                            <div className="character-wrapper">
                                <img src={Luffy} alt="" />
                                <div className='text-box'>
                                    <div className="character-name">Luffy</div>
                                    <div className="character-description">The rubber boy</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Character_section; 