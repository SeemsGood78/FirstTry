import React from "react";

import ContentBlock from "../components/ContentBlock";
import SideMenu from "../components/SideMenu";
import Categories from "../components/Categories"

const Home = ({searchValue}) =>{
    return(
        <div>
            <div className="container">
                <Categories />
                <div className="content">
                    <SideMenu />
                    <ContentBlock searchValue={searchValue} />
                </div>
            </div>
        </div>
    )
}

export default Home;