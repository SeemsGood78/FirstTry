import React, { useEffect, useState } from "react";
import ContentItem from "./ContentItem";

const ContentBlock = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://62fe842e41165d66bfc1aab6.mockapi.io/Items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log('render')
            })
    }, [])

    // array of types



    return (
        <>
            <div className="right-block">
                {/* <div className="right-block-titleBar">
                    <div>
                        <h1>Пшеничное пиво</h1>
                    </div>
                    <ul>
                        <li><a href="#">Рекомендуемые</a></li>
                        <li><a href="#">Популярные</a></li>
                        <li><a href="#" className="active">Новинки</a></li>
                        <li className="dropdown"><a href="#" type="button">Цена <i className="change"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">От низкой к высокой </a></li>
                                <li><a href="#">От высокой к низкой </a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#" type="button">Призводитель A-Z <i className="change"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">От A до Z </a></li>
                                <li><a href="#">От Z до A </a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#" type="button">Винтаж <i className="change"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">От новых к старым </a></li>
                                <li><a href="#">От старых до новых </a></li>
                            </ul>
                        </li>
                    </ul>
                </div> */}
                <div className="right-block-grid">
                    {items.map(item => (
                        <ContentItem item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ContentBlock