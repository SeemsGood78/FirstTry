import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const { items, totalPrice } = useSelector(state => state.cart)

    console.log(items)

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
                    {/* переименовать */}
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
                                <span>Total Price</span>
                            </div>
                        </div>
                        {
                            items.map((item, idx) => <CartItem key={idx} item={item} />)
                        }
                        <div className="cart-leftblock-bottom">
                            <Link to='/' className="cart-navbar-continue">Continue shopping</Link>
                            {/* not a, button */}
                            <a href="#" onClick={() => dispatch(clearCart())}>Clear cart</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart