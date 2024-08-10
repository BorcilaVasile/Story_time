import React from 'react';
import './Contact_page_hero_section.css';
import './Contact_page_contact_form.css';
import Wind from '../../assets/wind_breaker.jpg';

function Contact_page() {
    return (
        <div className='contact'>
                <div className='contact_hero_section'>
                    <img src={Wind} alt="" className='background_image'/>
                    <div className='contact_container'>
                        <h1>Contact Us</h1>
                        <h3>Get in touch with us today</h3>
                    </div> 
                </div>
                <div className='contact_form'>
                    <div className='contact_form_container'>
                        <h1>Send us a message</h1>
                        <form>
                            <div className='contact_form_input'>
                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' name='name' placeholder='Enter your name' />
                            </div>
                            <div className='contact_form_input'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' placeholder='Enter your email' />
                            </div>
                            <div className='contact_form_input'>
                                <label htmlFor="message">Message</label>
                                <textarea id='message' name='message' placeholder='Enter your message'></textarea>
                            </div>
                            <div className='contact_form_row'>
                                <button type='submit'>Send</button>
                            </div>
                        </form>
                    </div> 
                </div>

        </div>
    );
}

export default Contact_page;