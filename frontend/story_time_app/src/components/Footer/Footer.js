import React, {useState, useEffect } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import fb from '../../assets/fb.jpg';
import twitter from '../../assets/twitter.jpg';
import insta from '../../assets/insta.jpg';
import youtube from '../../assets/yt.jpg';


function Footer(){
    return (
        <div className='footer'>
            <div className='footer_content section_padding'>
               <div className='footer_links'> 
                    <div className='footer_links_div'>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="footer_links_div">
                        <h4>Resources</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="footer_links_div">
                        <h4>Contact</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <h4> For Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="footer_links_div">
                        <h4>Coming soon</h4>
                        <div className='social_media'>
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={youtube} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='footer_bellow'>
                    <div className='footer_copyright'>
                        <p>
                            @{new Date().getFullYear()} Story Time. All rights reserved.
                        </p>
                    </div>
                    <div className='footer_bellow_links'>
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/cookie">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;