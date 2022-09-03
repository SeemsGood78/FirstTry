import React from "react";

const ContentItem = ({item}) => {
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
                    <p>{item.volume} л
                    </p>
                </a>
                <span>
                    <a href="#">{item.type}</a>
                </span>
            </div>
            <div className="right-block-grid-item-price">
                <div>
                    <p>Цена за 1 шт</p>
                    <div>
                        {item.price}
                        <sup>грн</sup>
                    </div>
                </div>
                <input type="button" value="+ В корзину " />
            </div>
        </div>
    )
}

export default ContentItem