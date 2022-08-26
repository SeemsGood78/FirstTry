import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ searchValue, setSearhcValue }) => {
    const [headerSearch, setHeaderSearch] = useState('')

    const handleClick = (e) => {
        if (e.keyCode === 13) {
            setSearhcValue(headerSearch)
        }
    }

    const clearInput = () => {
        setSearhcValue('')
        setHeaderSearch('')
    }

    return (
        <div>
            <header>
                <div className="top-bannerbg">
                    <div className="container">
                        <div className="top-banner">
                            <div className="top-banner-logo" >
                                <Link to="/" style={{ color: 'white', fontSize: '30px' }}>
                                    Pivoslav
                                </Link>
                            </div>
                            <div className="top-banner-search">
                                <input
                                    value={headerSearch}
                                    onChange={e => setHeaderSearch(e.target.value)}
                                    onKeyUp={e => handleClick(e)}
                                    type="text"
                                    placeholder="Search..." />
                                <span onClick={() => clearInput()}>x</span>
                            </div>
                            <button onClick={() => setSearhcValue(headerSearch)} style={{ color: 'white' }}>Button</button>
                            <div className="top-banner-cab">
                                <p><a href="#">Log in</a> | <a href="#">Sign up</a></p>
                                <span>Kab</span>
                            </div>
                            <div className="top-banner-cart">
                                <Link to={'/cart'}>
                                    <span>Корзина: 0</span>
                                    <p>000</p>
                                </Link>
                            </div>
                            <div className="top-banner-contacts">
                                <p>Интернет-магазин</p>
                                <span>050 385 04 68</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;