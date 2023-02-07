import React, {useState } from "react"

const Form = () => {
    const [messageName, setMessageName] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [surnameTouched, setSurnameTouched] = useState(false);

    const disableLatters = (e,mess) => {
        const result = e.target.value.replace(/[^a-z]/gi, '');
        mess(result);
    };

    const onChangeHandler = (e,name,mess) => {

        disableLatters(e,mess)

        if (e.target.value.length === 0) {
            setNameError(`${name} can't be empty`)
        }
        else if (e.target.value.length > 8) {
            setNameError(`${name} field is too long`)
        }
        else if (e.target.value.length < 2) {
            setNameError(`${name} field is too short`)
        }
        else setNameError(undefined)
    }

    // const Ole = () => {
    //     setSurnameTouched(true)

    // }

    const capitalize = str => {
        return (
          str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        );
      };

    const prevent = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <h2>Get in touch!</h2>
            <form action="">
                <label>
                    <input
                        type="text" placeholder="Name" 
                        value={capitalize(messageName)}
                        onChange={e => onChangeHandler(e, 'Name',setMessageName)}
                        onBlur={() => setNameTouched(true)}
                    />
                    <input
                        value={message}
                        type="text" placeholder="Surname"
                        onChange={e => onChangeHandler(e, 'Surname',setMessage)}
                        onBlur={() => setSurnameTouched(true)}
                    />
                </label>
                {surnameTouched && nameError && <div className="error">{nameError}</div>}
                {nameTouched && nameError && <div className="error">{nameError}</div>}
                <label>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" placeholder="Phone" maxLength={13} />
                </label>
                {/* {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>} */}
                <label>
                    <input type="text" name='password' placeholder="Password" />
                </label>
                <label>
                    <span>
                        <input type="checkbox" />
                        <span>I have read and agreed with the terms and conditions.</span>
                    </span>
                </label>
                <label>
                    <input className="buttons" type='reset' value="Reset" />
                    <input className="buttons" type='submit' value="Submit" onClick={(e) => prevent()} />
                </label>
            </form>
        </>
    )
}

export default Form
