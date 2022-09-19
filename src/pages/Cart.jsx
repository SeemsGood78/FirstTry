import React from "react";
import { Link } from "react-router-dom";

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
                    </div>
                    <div className="cart-leftblock">
                        <div className="cart-leftblock-emptycart">
                            <div className="cart-leftblock-emptycart-name">
                                <span>Product</span>
                            </div>
                            <div className="cart-leftblock-emptycart-capacity">
                                <span>Volume</span>
                            </div>
                            <div className="cart-leftblock-emptycart-price">
                                <span>Unit Price</span>
                            </div>
                            <div className="cart-leftblock-emptycart-quantity">
                                <span>Qty</span>
                            </div>
                            <div className="cart-leftblock-emptycart-total">
                                <span>Line Price</span>
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
                                    <a href="#">
                                        <span>
                                            Issac   
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="cart-leftblock-item-capacitycol">
                                <p>0,75 L.</p>
                            </div>
                            <div className="cart-leftblock-item-price4one">
                                <p>249<sup className="idk">UAH</sup></p>
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
                                <p>249<sup className="idk">UAH</sup></p>
                            </div>
                        </div>
                        <div className="cart-leftblock-bottom">
                            <Link to='/' className="cart-navbar-continue">Continue shopping</Link>
                            <a href="#">Clear cart</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart