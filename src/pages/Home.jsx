import React from "react";

import ContentBlock from "../components/ContentBlock";
import SideMenu from "../components/SideMenu";
import Categories from "../components/Categories"

const Home = () => {
    
    return (
        <>
            <div className="container try">
                <Categories />
                <div className="content">
                    <SideMenu />
                    <ContentBlock />
                </div>
            </div>
        </>
    )
}

export default Home;