import React from 'react';
import './Register.css';

function Register() {
    return (
    <div className='register_container'>
        <div className='register_title'>
            Register
        </div>
        <div className='register_form'>
            <form>
                <div className='register_form_row'>
                    <div className='register_form_column'>
                        <label htmlFor='username'>Username</label>
                        <label htmlFor="firstName">First Name</label>
                        <label htmlFor='lastName'> Last Name</label>
                        <label htmlFor="email">Email</label>
                        <label htmlFor="password">Password</label>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <div className='register_form_column'>
                        <input type="text" id='username' name='username' placeholder='Enter your username' />
                        <input type="text" id='name' name='name' placeholder='Enter your first name' />
                        <input type="text" id='name' name='name' placeholder='Enter your last name' />
                        <input type="email" id='email' name='email' placeholder='Enter your email' />
                        <input type="password" id='password' name='password' placeholder='Enter your password' />
                        <input type="password" id='confirmPassword' name='confirmPassword' placeholder='Confirm your password' />
                    </div>
                </div>
                <div className='register_form_row'>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Register;