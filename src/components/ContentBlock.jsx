import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, setfiltredItems } from "../redux/slices/sortSlice";

import ContentItem from "./ContentItem";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']
const sortList = ['title', 'rating', 'price']

const ContentBlock = ( ) => {
    const dispatch = useDispatch()
    const { searchValue, categoryId, sortId, items, status, fromItem, toItem, filtredItems } = useSelector(state => state.sort)
    const { minPrice, maxPrice, volume} = useSelector(state => state.filter)


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
    }, [categoryId, sortList, sortId])

    useEffect(() => {
        filterItems()
    }, [searchValue, minPrice, maxPrice, volume, items])
    
    // optional
    if (status === 'error') {
        return (<h1>Error with getting data</h1>)
    }

    function filterItems() {
        const res = 
        items
        .filter(item => (
            item.title.toLowerCase().includes(searchValue.toLowerCase()) 
            && item.price > minPrice 
            && item.price < maxPrice
            && (volume !== undefined && item.volume === volume)
        ))
        .slice(fromItem, toItem)
        dispatch(setfiltredItems(res))
    }


    return (
        <>
            <div className="right-block">
                <div className="right-block-grid">
                    { status !== 'loaded' && 
                        [...Array(9)].map((_, idx) => (
                            <Skeleton key={idx} />
                        ))                    
                    }
                    { status === 'loaded' &&
                        filtredItems.map((item, idx) => (
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