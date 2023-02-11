import React, { useState } from "react"

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

const disableLatters = (e, cap) => {
    const result = e.target.value.replace(/[^a-z]/gi, '');
    cap(result);
};


const Form = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [surnameTouched, setSurnameTouched] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [password, setPassword] = useState('');

    const emailCheck = (e) =>{
        setEmail(e.target.value)
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false){
            setEmailError('Invalid email')
        }
        else setEmailError(undefined)
    }

    const phoneCheck = (e) =>{
        setPhone(e.target.value)
        if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone) === false){
            setPhoneError('Invalid phone number')
        }
        else setPhoneError(undefined)
    }

    const clearPassword = () => {
        setPassword('')
    }

    const onChangeHandler = (e, cap, Errors) => {
        const { name, value } = e.target;
        disableLatters(e, cap)

        if (value.length === 0) {
            Errors(`${name} can't be empty`)
        }
        else if (value.length > 8) {
            Errors(`${name} field is too long`)
        }
        else if (value.length < 2) {
            Errors(`${name} field is too short`)
        }
        else Errors(undefined)
    }

    return (
        <>
            <h2>Get in touch!</h2>
            <form>
                <label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={capitalize(name)}
                        name='Name'
                        onChange={e => onChangeHandler(e ,setName ,setNameError)}
                        onBlur={() => setNameTouched(true)}
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        name='Surname'
                        value={capitalize(surname)}
                        onChange={e => onChangeHandler(e,setSurname ,setSurnameError)}
                        onBlur={() => setSurnameTouched(true)}
                    />
                </label>
                {surnameTouched && surnameError && <div className="error">{surnameError}</div>}
                {nameTouched && nameError && <div className="error">{nameError}</div>}
                <label>
                    <input 
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    value={email}
                    onChange={e => emailCheck(e)}
                    onBlur={() => setEmailTouched(true)}
                    />
                    <input 
                    type="text" 
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={e => phoneCheck(e)}
                    onBlur={() => setPhoneTouched(true)}
                    />
                </label>
                {emailTouched && emailError && <div className="error">{emailError}</div>}
                {phoneTouched && phoneError && <div className="error">{phoneError}</div>}
                <label>
                    <input
                    type="password"
                    name='password'
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div 
                    className={password? 'reset' : 'display-none'}
                    onClick={()=> clearPassword()}
                    >12</div>
                </label>
                <label>
                    <span>
                        <input type="checkbox" />
                        <span>I have read and agreed with the terms and conditions.</span>
                    </span>
                </label>
                <label>
                    <input className="buttons" type='reset' value="Reset" />
                    <input className="buttons" type='submit' value="Submit" onClick={(e) => e.preventDefault()} />
                </label>
            </form>
        </>
    )
}

export default Form
