import axios from "axios";
import React, { useEffect, useState } from "react";

import ContentItem from "./ContentItem";
import Skeleton from "./Skeleton";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']

const ContentBlock = ({ searchValue, categoryId }) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const linkType = categoryId ? `type=${categories[categoryId]}` : ''

        axios.get(`https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}`)
            .then(res => {
                setItems(res.data)
                setIsLoading(false)
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
                    {isLoading
                        ?
                        [...Array(9)].map((_, idx) => (
                            <Skeleton key={idx} />
                        ))
                        :
                        items
                            .filter(item => (
                                item.title.toLowerCase().includes(searchValue.toLowerCase())
                            ))
                            .map((item, idx) => (
                                <ContentItem key={idx} item={item} />
                            ))
                    }
                </div>
            </div>
        </>
    )
}

export default ContentBlock