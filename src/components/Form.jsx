import React, { useState } from "react"

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

const disableLatters = (e, setName) => {
    const result = e.target.value.replace(/[^a-z]/gi, '');
    setName(result);
};

const Form = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [nameError, setNameError] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [surnameTouched, setSurnameTouched] = useState(false);

    const onChangeHandler = (e, setName, setErrors) => {
        const { name, value } = e.target;
        disableLatters(e, setName)

        if (value.length === 0) {
            setNameError(`${name} can't be empty`)
        }
        else if (value.length > 8) {
            setNameError(`${name} field is too long`)
        }
        else if (value.length < 2) {
            setNameError(`${name} field is too short`)
        }
        else setNameError(undefined)
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
                        name='name'
                        onChange={e => onChangeHandler(e, setName)}
                        onBlur={() => setNameTouched(true)}
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        value={capitalize(surname)}
                        // Сделать так что бы не передавали 'Surname'
                        onChange={e => onChangeHandler(e, 'Surname', setSurname)}
                        onBlur={() => setSurnameTouched(true)}
                    />
                </label>
                {surnameTouched && nameError && <div className="error">{nameError}</div>}
                {nameTouched && nameError && <div className="error">{nameError}</div>}
                <label>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" placeholder="Phone" maxLength={13} />
                </label>
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
                    <input className="buttons" type='submit' value="Submit" onClick={(e) => e.preventDefault()} />
                </label>
            </form>
        </>
    )
}

export default Form
