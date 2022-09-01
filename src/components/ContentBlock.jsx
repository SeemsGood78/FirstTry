import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

import ContentItem from "./ContentItem";
import Skeleton from "./Skeleton";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']
const sortList = ['title', 'rating', 'price']


const ContentBlock = ({ categoryId, sortId}) => {
    const searchValue = useSelector(state => state.sort.searchValue)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        const linkType = categoryId ? `type=${categories[categoryId]}` : ''
        const linkSort = `sortBy=${sortList[sortId]}`

        axios.get(`https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}&${linkSort}`)
            .then(res => {
                setItems(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                alert('Something went wrong!')
                console.error(err)
            })
    }, [categoryId,sortId])


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