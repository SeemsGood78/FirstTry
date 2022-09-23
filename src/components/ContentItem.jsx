import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const ContentItem = ({item}) => {
    const dispatch = useDispatch()

    const addToCart = (item) => {
        dispatch(
            addItem({
                ...item
            })
        )
    }

    return (
        <div key={item.id} 
            className={item.isAvailable? "right-block-grid-item" : "right-block-grid-item notAvailable"}
        >
            <div className="right-block-grid-item-img">
                <a href="#">
                    <img src={item.imageUrl} alt="" />
                </a>
            </div>
            <div className="right-block-grid-item-text">
                <a href="#" className="title">
                    <span>{item.title}</span>
                    <p>{item.volume} L.
                    </p>
                </a>
                <span>
                    <a href="#">{item.type}</a>
                </span>
            </div>
            <div className="right-block-grid-item-price">
                <div>
                    <p>Price for one</p>
                    <div>
                        {item.price}
                        <sup>UAH</sup>
                    </div>
                </div>
                <input type="button" value="Add to cart " onClick={()=> addToCart(item)} />
            </div>
        </div>
    )
}

export default ContentItem