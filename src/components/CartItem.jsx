import { useDispatch } from "react-redux"
import { minusItem, plusItem, removeItem } from "../redux/slices/cartSlice"

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const onClickRemove = (param) => {
        if( window.confirm("Do you really want to remove this item")) {
            dispatch(removeItem(param))
        }
    }

    return (
        <div className="cart-leftblock-item">
            <a href="#" onClick={ () => onClickRemove(item.id) }></a>
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
                <div>
                    <p>
                        <button className="minus" onClick={() => dispatch(minusItem(item.id))}></button>
                        <span>{item.count}</span>
                        <button className="plus" onClick={() => dispatch(plusItem(item.id))}></button>
                    </p>
                </div>
            </div>
            <div className="cart-leftblock-item-totalcol">
                <p>{item.count*item.price}<sup className="idk">UAH</sup></p>
            </div>
        </div>
    )
}

export default CartItem