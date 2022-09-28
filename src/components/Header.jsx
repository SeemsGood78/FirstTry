import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from "../redux/slices/sortSlice";

const Header = () => {
    const { items, totalPrice } = useSelector(state => state.cart)
    const [headerSearch, setHeaderSearch] = useState('')
    const dispatch = useDispatch()

    const handleClick = (e) => {
        if (e.keyCode === 13) {
            dispatch(setSearchValue(headerSearch))
        }
    }

    const clearInput = () => {
        dispatch(setSearchValue(''))
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
                            <div className="forMobile"><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/menu.png" alt="" /></div>
                            <div className="top-banner-search">
                                <input
                                    value={headerSearch}
                                    onChange={e => setHeaderSearch(e.target.value)}
                                    onKeyUp={e => handleClick(e)}
                                    type="text"
                                    placeholder="Search..." />
                                <span onClick={() => clearInput()}><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/cross.png" alt=""></img></span>
                                <button onClick={() => dispatch(setSearchValue(headerSearch))} style={{ color: 'white' }}>Confirm</button>
                            </div>
                            <Link to={'/cart'}>
                                <div className="forMobile"><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/shopping-cart.png" alt="" /></div>
                            </Link>
                            <div className="top-banner-cab">
                                <p><a href="#">Log in</a> | <a href="#">Sign up</a></p>
                                <span>Kab</span>
                            </div>
                            <div className="top-banner-cart">
                                <Link to={'/cart'}>
                                    <span>Cart: {items.length}</span>
                                    <p>{totalPrice} UAH</p>
                                </Link>
                            </div>
                            <div className="top-banner-contacts">
                                <p>Internet-shop</p>
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