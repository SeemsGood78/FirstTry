import React,{useRef} from "react"

const Form = () => {
    const test = useRef(null) 
    console.log(test.current)
    return(
        <>
        {/* label sdelay vmesto diva debil */}
         <h2>Get in touch!</h2>
                <form action="">
                    <div>
                        <input type="text" placeholder="Name" ref={test} />
                        <input type="text" placeholder="Surname" maxLength={12} />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" maxLength={12} />
                        <input type="text" placeholder="Phone" maxLength={13} />
                    </div>
                    <div>
                        <input type="text" placeholder="Password" maxLength={12} />
                    </div>
                    <div>
                        <span>
                            <input type="checkbox"/>
                            <span>I have read and agreed with the terms and conditions.</span>
                        </span>
                    </div>
                    <div>
                        <button>Submit</button>
                        <button>Reset</button>
                    </div>
                </form>
        </>
    )
}

export default Form
