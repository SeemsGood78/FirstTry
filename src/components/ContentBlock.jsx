import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from "../redux/slices/sortSlice";

import ContentItem from "./ContentItem";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']
const sortList = ['title', 'rating', 'price']

const ContentBlock = ( ) => {
    const dispatch = useDispatch()
    const { searchValue, categoryId, sortId, items, status, currentPage } = useSelector(state => state.sort)

    const getItems = async () => {
        const linkType = categoryId ? `type=${categories[categoryId]}` : ''
        const linkSort = `sortBy=${sortList[sortId]}`

        dispatch(
            fetchItems({
                linkType,
                linkSort,
                currentPage,
            }),
        );
    }

    useEffect(() => {
        getItems()
    }, [categoryId, sortList, sortId, currentPage])

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
                <Pagination />
            </div>
        </>
    )
}

export default ContentBlock