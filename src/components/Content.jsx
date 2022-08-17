import React from "react";
import ContentBlock from "./ContentBlock";
import SideMenu from "./SideMenu";

const Content = () => {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <SideMenu />
                    <ContentBlock />
                </div>
            </div>
        </div>
    )
}

export default Content;