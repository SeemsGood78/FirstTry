import React, { useState } from "react";

import ContentBlock from "../components/ContentBlock";
import SideMenu from "../components/SideMenu";
import Categories from "../components/Categories"

const Home = ({ searchValue }) => {
    const [categoryId, setCategoryId] = useState(0)
    const [sortId, setSortId] = useState(0)
    
    return (
        <div>
            <div className="container">
                <Categories categoryId={categoryId} setCategoryId={setCategoryId} sortId={sortId} setSortId={setSortId}/>
                <div className="content">
                    <SideMenu />
                    <ContentBlock categoryId={categoryId} searchValue={searchValue} sortId={sortId}/>
                </div>
            </div>
        </div>
    )
}

export default Home;