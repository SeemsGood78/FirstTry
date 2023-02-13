import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
                <img src='https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/eye-3-xxl.png'
                    className='resetb'
                    onClick={() => togglePassword()}
                ></img>
            </div>
            <div className='split'>
                <Link to={'/Reg'} className='notA'> <input type="reset" className='button' value='Create account' /></Link>
                <input type="submit" className='button' value='Submit' />
            </div>
        </div>
    );
};

export default LogIn;