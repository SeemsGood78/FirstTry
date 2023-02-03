import React,{useRef} from "react"

const Form = () => {
    const test = useRef(null) 
    console.log(test.current)
    return(
        <>
        {/* label sdelay vmesto labela debil */}
         <h2>Get in touch!</h2>
                <form action="">
                    <label>
                        <input type="text" placeholder="Name" ref={test} />
                        <input type="text" placeholder="Surname" maxLength={12} />
                    </label>
                    <label>
                        <input type="text" placeholder="Email" maxLength={12} />
                        <input type="text" placeholder="Phone" maxLength={13} />
                    </label>
                    <label>
                        <input type="text" placeholder="Password" maxLength={12} />
                    </label>
                    <label>
                        <span>
                            <input type="checkbox"/>
                            <span>I have read and agreed with the terms and conditions.</span>
                        </span>
                    </label>
                    <label>
                        <input className="buttons" type='reset' value="Reset" />
                        <input className="buttons" type='submit' value="Submit" />
                    </label>
                </form>
        </>
    )
}

export default Form
