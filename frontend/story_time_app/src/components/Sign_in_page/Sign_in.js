import React from 'react';
import './Sign_in.css';

function Sign_in() {
    return (
    //container for the sing in page 
    <div className='sign_in_container'>
        <div className='sign_in_title'>
            Welcome back!
        </div>
        <button className='sign_in_button_google'>
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' className='logo' />
            Google
        </button>
        <div className='sign_in_or'> or </div>

        <form>
            <input type="text" id='username' name='username' placeholder='Username or email' />
            <input type="password" id='password' name='password' placeholder='Password' />
        </form>
        <button type='submit' className='sign_in_button'>Sign in</button>
        <div className='sign_in_forgot_password'>
            <a href='/'>Forgot password?</a>
        </div>
        <div className='sign_in_register'>
            <a href='/register'>Don't have an account? Register</a>
        </div>
    </div>
    );
}

export default Sign_in;