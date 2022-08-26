import React from "react";

const Cart = () => {
    return (
        <>
            <div className="container">
                <div className="cart">
                    <div className="cart-navbar">
                        <ul className="cart-navbar__list">
                            <li>
                                <a href="#" className="current">
                                    <span className="cart-span"></span>
                                    Моя корзина
                                </a>
                            </li>
                            <li>
                                <a href="#" className="disable lines">
                                    <span className="order"></span>
                                    Офромить заказ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="disable">
                                    <span className="finish"></span>
                                    Заказ оформлен
                                </a>
                            </li>
                        </ul>
                        <a href="#" className="cart-navbar-continue">Продолжить покупки</a>
                    </div>
                    <div className="cart-leftblock">
                        <div className="cart-leftblock-emptycart">
                            <div className="cart-leftblock-emptycart-name">
                                <span>Товар</span>
                            </div>
                            <div className="cart-leftblock-emptycart-capacity">
                                <span>Емкость</span>
                            </div>
                            <div className="cart-leftblock-emptycart-price">
                                <span>Цена 1шт</span>
                            </div>
                            <div className="cart-leftblock-emptycart-quantity">
                                <span>кол-во.</span>
                            </div>
                            <div className="cart-leftblock-emptycart-total">
                                <span>Всего</span>
                            </div>
                        </div>
                        <div className="cart-leftblock-item">
                            <a href="#"></a>
                            <div className="cart-leftblock-item-namecol">
                                <div className="cart-leftblock-item-namecol-img">
                                    <a href="#">
                                        <img src='../assets/img/Ale/Amber.png' alt="" />
                                    </a>
                                </div>
                                <div className="cart-leftblock-item-namecol-text">
                                    <span><a href="#">Италия</a></span>
                                    <a href="#">
                                        <span>
                                            Issac
                                            <p>Aрт. 31863</p>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="cart-leftblock-item-capacitycol">
                                <p>0,75 л</p>
                            </div>
                            <div className="cart-leftblock-item-price4one">
                                <p>249<sup className="idk">грн</sup></p>
                            </div>
                            <div className="cart-leftblock-item-quantitycol">
                                <form action="">
                                    <p>
                                        <a href="#" className="minus"></a>
                                        <input type="text" value="1" size="4" maxLength="12" />
                                            <a href="#" className="plus"></a>
                                    </p>
                                </form>
                            </div>
                            <div className="cart-leftblock-item-totalcol">
                                <p>249<sup className="idk">грн</sup></p>
                            </div>
                        </div>
                        <div className="cart-leftblock-bottom">
                            <a href="#" className="condition">Условия доставки</a>
                            <a href="#">Очистить корзину</a>
                            <button>Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart