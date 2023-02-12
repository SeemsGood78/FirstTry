import React, { useState } from 'react';

const LogIn = () => {
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className='mainBlock'>
            <label>Email</label>
            <input type="text" className='mainBlock-log' />
            <label className='mt'>Password or phone number</label>
            <div className='flexSplit'>
                <input
                    type={passwordShown ? "text" : "password"}
                    className='mainBlock-log'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div
                    className='resetb'
                    onClick={() => togglePassword()}
                >12</div>
            </div>
            <div className='split'>
                <input type="reset" className='button' value='Create account' />
                <input type="submit" className='button' value='Submit' />
            </div>
        </div>
    );
};

export default LogIn;