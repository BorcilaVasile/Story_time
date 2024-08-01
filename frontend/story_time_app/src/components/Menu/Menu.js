import React, {useState, useEffect } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import book from '../../assets/book-open.jpg';
import './Menu.css';



function Menu(){
    const [ theme, setTheme] = useState(localStorage.getItem('theme')||'light');

    const handleThemeChange = (val) => {
      setTheme(val);
      document.body.className = val; 
    };
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <Navbar className='navbar'>
            <Navbar.Brand href="/" className='navbar-brand'>
                    <img src={book} alt='Book open' className='navbar-brand-img' />
                    Story Time
            </Navbar.Brand>
            <ToggleButtonGroup type= 'radio' name='theme' value={theme} onChange={handleThemeChange} className='toggle-bar'>
                <ToggleButton 
                id="tbg-radio-1" 
                value="light" 
                className='btn-custom' 
                style={{backgroundColor: theme === 'light' ? '#9ddcf6' : 'white',
                     color: 'black',
                     border:'1px solid #000000'}} 
                active={ theme === 'light'}>
                Light
                </ToggleButton>
                <ToggleButton 
                id="tbg-radio-2" 
                value="dark" 
                className='btn-custom'
                style={{backgroundColor: theme === 'light' ? 'white' : '#9ddcf6', 
                    color: 'black',
                    border: '1px solid #000000'}} 
                active={ theme === 'dark'}>
                Dark
                </ToggleButton>
            </ToggleButtonGroup>
            <Nav className="links">
                <Nav.Link href="/create">Create your own story</Nav.Link>
                <Nav.Link href="/examples">Examples</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>

            </Nav>
                <Button href="/login" className='signInButton'
                style={{ backgroundColor: '#7EB0C5' }}>Sign in</Button>
                <Button href="/signup" className='registerButton'
                style={{ backgroundColor: '#193B49' }}>Register</Button>
        </Navbar>
    );
}

export default Menu; 