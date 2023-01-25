import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const { items, totalPrice } = useSelector(state => state.cart)

    if (!totalPrice) {
        return <>
            <div className="cart-leftblock-noItems">
                You have no items in your cart
            </div>
        </>
    }

    return (
        <>
        <h1 className="cartLabel">Cart</h1>
            <div className="container try">
                <div className="cart">
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
                        {/* <div className="cart-leftblock-noItems">
                        You have no items in your cart
                        </div> */}
                        {
                            items.map((item, idx) => <CartItem key={idx} item={item} />)
                        }
                        <div className="cart-leftblock-bottom">
                            <Link to='/' className="cart-navbar-continue">Continue shopping</Link>
                            <div>Total Price : {totalPrice} </div>
                            <button href="#" onClick={() => dispatch(clearCart())}>Clear cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart