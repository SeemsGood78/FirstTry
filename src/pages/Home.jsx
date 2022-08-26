import React, { useState } from "react";

import ContentBlock from "../components/ContentBlock";
import SideMenu from "../components/SideMenu";
import Categories from "../components/Categories"

const Home = ({ searchValue }) => {
    const [categoryId, setCategoryId] = useState(0)
    
    return (
        <div>
            <div className="container">
                <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
                <div className="content">
                    <SideMenu />
                    <ContentBlock categoryId={categoryId}   searchValue={searchValue} />
                </div>
            </div>
        </div>
    )
}

export default Home;