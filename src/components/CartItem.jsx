import { useDispatch } from "react-redux"
import { removeItem } from "../redux/slices/cartSlice"

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    return (
        <div className="cart-leftblock-item">
            <a href="#" onClick={() => dispatch(removeItem(item.id))}></a>
            <div className="cart-leftblock-item-namecol">
                <div className="cart-leftblock-item-namecol-img">
                    <a href="#">
                        <img src={item.imageUrl} />
                    </a>
                </div>
                <div className="cart-leftblock-item-namecol-text">
                    <a href="#">
                        <span>
                            {item.title}
                        </span>
                    </a>
                </div>
            </div>
            <div className="cart-leftblock-item-capacitycol">
                <p>{item.volume} L</p>
            </div>
            <div className="cart-leftblock-item-price4one">
                <p>{item.price}<sup className="idk">UAH</sup></p>
            </div>
            <div className="cart-leftblock-item-quantitycol">
                {/* Не форма */}
                <form action="">
                    <p>
                        <a href="#" className="minus"></a>
                        <input type="text" value={item.count} size="4" maxLength="12" />
                        <a href="#" className="plus"></a>
                    </p>
                </form>
            </div>
            <div className="cart-leftblock-item-totalcol">
                <p>{item.count*item.price}<sup className="idk">UAH</sup></p>
            </div>
        </div>
    )
}

export default CartItem