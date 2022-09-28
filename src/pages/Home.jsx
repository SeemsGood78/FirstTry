import React, { useState } from "react";

import ContentBlock from "../components/ContentBlock";
import SideMenu from "../components/SideMenu";
import Categories from "../components/Categories"

const Home = () => {
    const [sortId, setSortId] = useState(0)
    
    return (
        <>
            <div className="container try">
                <Categories sortId={sortId} setSortId={setSortId}/>
                <div className="content">
                    <SideMenu />
                    <ContentBlock sortId={sortId}/>
                </div>
            </div>
        </>
    )
}

export default Home;