import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from "../redux/slices/sortSlice";

import ContentItem from "./ContentItem";
import Skeleton from "./Skeleton";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']
const sortList = ['title', 'rating', 'price']

const ContentBlock = ({ sortId }) => {
    const dispatch = useDispatch()
    const { searchValue, categoryId, items, status } = useSelector(state => state.sort)

    const getItems = async () => {
        const linkType = categoryId ? `type=${categories[categoryId]}` : ''
        const linkSort = `sortBy=${sortList[sortId]}`

        dispatch(
            fetchItems({
                linkType,
                linkSort,
            }),
        );
    }

    useEffect(() => {
        getItems()
    }, [categoryId, sortList])

    // optional
    if (status === 'error') {
        return (<h1>Error with getting data</h1>)
    }

    return (
        <>
            <div className="right-block">
                <div className="right-block-grid">
                    {status !== 'loaded'
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