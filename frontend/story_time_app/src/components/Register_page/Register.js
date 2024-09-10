import React from 'react';
import { useState } from 'react';
import './Register.css';

function Register() {
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);   

    const toggleVisibility = (setShow, currentValue) => {
        setShow(!currentValue); // Inversăm valoarea curentă
    };



    return (
    //container for the register page 
    <div className='register_container'>
        <div className='register_title'>
            Let's get started!
        </div>
        <button className='register_button_google'>
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' className='logo' />
            Google
        </button>
        <div className='register_or'> or </div>

        <form>
            <input type="text" id='username' name='username' placeholder='Username' />
            <input type="text" id='name' name='name' placeholder='First name' />
            <input type="text" id='name' name='name' placeholder='Last name' />
            <input type="email" id='email' name='email' placeholder='E-mail' />
            <div className='password'>
                <input 
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password' 
                placeholder='Password' />
                <button 
                    type='button' 
                    className='togglePassword'
                    onClick={() => toggleVisibility(setShowPassword, showPassword)}>
                         {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <div className='password'>
                <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                id='confirmPassword' 
                name='confirmPassword' 
                placeholder='Confirm password' />
                <button 
                    type='button' 
                    className='togglePassword'
                    onClick={() => toggleVisibility(setShowConfirmPassword, showConfirmPassword)}>
                         {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
            </div>
        </form>
        <button type='submit' className='register_button'>Register</button>
        <div className='register_sign_in'>
            <a href='/login'>Already have an account? Sign in</a>
        </div>
    </div>
    );
}

export default Register;