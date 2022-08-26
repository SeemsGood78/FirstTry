import axios from "axios";
import React, { useEffect, useState } from "react";

import ContentItem from "./ContentItem";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']

const ContentBlock = ({ searchValue, categoryId }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const linkType = categoryId ? `type=${categories[categoryId]}` : ''

        axios.get(`https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}`)
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                alert('Something went wrong!')
                console.error(err)
            })
    }, [categoryId])


    return (
        <>
            <div className="right-block">
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