import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentItem from "./ContentItem";

const ContentBlock = ({searchValue}) => {
    const [items, setItems] = useState([])
    const [types, setTypes] = useState([])

    console.log(searchValue)
    useEffect(() => {
        axios.get('https://62fe842e41165d66bfc1aab6.mockapi.io/Items')
            .then(res => setItems(res.data))
            .catch(err => {
                console.error(err)
            })
        // .finally(
        //     setTypes(items.reduce((acc, item) => {
        //         if (!acc.includes(item.type)) {
        //             acc.push(item.type)
        //             console.log('push')
        //         }
        //     }, []))
        // ) 
    }, [])
    // console.log('types:', types)



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
                    {items
                    .filter(item => (
                        item.title.toLowerCase().includes(searchValue.toLowerCase())
                    ))
                    .map((item, idx) => (
                        <ContentItem key={idx} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ContentBlock