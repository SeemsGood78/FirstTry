import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from "../redux/slices/sortSlice";

const Header = () => {
    const dispatch = useDispatch()
    const { items, totalPrice } = useSelector(state => state.cart)
    const [headerSearch, setHeaderSearch] = useState('')
    const isMounted = useRef(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // проверка на первый рендер компонента
        if (isMounted.current) {
            const json = JSON.stringify(items)
            localStorage.setItem('cart', json)
        }
        isMounted.current = true
    }, [items])

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
                            <div className='forMobile start' onClick={() => setIsOpen(!isOpen)}><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/menu.png" alt="" /></div>
                            <div className="top-banner-search">
                                <input
                                    value={headerSearch}
                                    onChange={e => setHeaderSearch(e.target.value)}
                                    onKeyUp={e => handleClick(e)}
                                    type="text"
                                    placeholder="Search..." />
                                <span
                                    className={headerSearch ? '' : 'display-none'}
                                    onClick={() => clearInput()}
                                >
                                    <img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/cross.png" alt="" />
                                </span>
                                <button onClick={() => dispatch(setSearchValue(headerSearch))} style={{ color: 'white' }}>Confirm</button>
                            </div>
                            <div className="end">
                                <Link to={'/cart'}>
                                    <div className="forMobile"><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/shopping-cart.png" alt="" /></div>
                                </Link>
                            </div>
                            <div className="top-banner-cab">
                                    <p><Link to={'/reg'}>Log in</Link> | <Link to={'/reg'}>Sign up</Link></p>
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
            <nav className={isOpen ? 'nav nav-open' : 'nav'}>
                <div className="navbar">
                    <div className="sidebg">
                        <div className="navbar-item">
                            <div className="separate">
                                <span className="navbar-item-logo"><Link to="/">
                                    Pivoslav
                                </Link></span>
                                <span>
                                    <img className="xmark" onClick={() => setIsOpen(!isOpen)} src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/cross4sidemenu.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="navbar-item-autorize">
                                <img className="autorizeIcon" src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/AutorizeIcon.png" alt="" />
                                <div className="navbar-item-autorize-options">
                                    <div>
                                        <button>Log in</button>
                                        <button>Registration</button>
                                    </div>
                                    <p>Please log in for more options</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item">cart</div>
                </div>
                <div className="nav-overlay" onClick={() => setIsOpen(!isOpen)}></div>
            </nav>
        </div>
    )
}

export default Header;