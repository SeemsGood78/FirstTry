import React from "react";
import { Link } from "react-router-dom";

const Header = ({searchValue, setSearhcValue}) => {
    // сделать крестик, позволяющий оччистить поле ввода
    // записывать searchValue при нажатии на кнопку, а не при изменении значения
    // *сделать на энтер
    // поправить стили логотипа

    return (
        <div>
            <header>
                <div className="top-bannerbg">
                    <div className="container">
                        <div className="top-banner">
                            {/* //////////////////////////////////////////////////////// */}
                            <div className="top-banner-logo" >
                                <Link to="/" style={{color:'white', fontSize:'30px'}}>
                                    Pivoslav
                                </Link>
                            </div>
                            <div className="top-banner-search">
                                <input
                                    value={searchValue}
                                    onChange={e => setSearhcValue(e.target.value)}
                                    type="text"
                                    placeholder="Search..." />
                                <button style={{ color: 'white' }}>Button</button>
                            </div>
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
