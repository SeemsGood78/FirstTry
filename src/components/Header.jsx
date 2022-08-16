import React from "react";

const Header = () => {
    return (
        <div>
            <header>
                <div className="top-bannerbg">
                    <div className="container">
                        <div className="top-banner">
                            <div className="top-banner-logo"></div>
                            <form className="top-banner-search">
                                <input type="text" placeholder="Zalupa" />
                                <button></button>
                            </form>
                            <div className="top-banner-cab">
                                <p><a href="#">jopa 2</a> | <a href="#">zalupa</a></p>
                                <span>Kab</span>
                            </div>
                            <div className="top-banner-cart">
                                <a href="#">
                                    <span>Корзина: 0</span>
                                    <p>000</p>
                                </a>
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