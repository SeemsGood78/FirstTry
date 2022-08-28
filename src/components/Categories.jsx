import React from "react";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']

const Categories = ({ categoryId, setCategoryId }) => {

    return (
        <div>
            <div className="bottom-banner">
                <div className="container flexb">
                    <ul>
                        {categories.map((category, idx) => (
                            <li
                                key={idx}
                                className={idx === categoryId ? 'active' : ''}
                                onClick={() => setCategoryId(idx)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                    <div className="dropdown">
                        <button className="dropbtn">Text sample</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories

// import React from "react";

// const Categories = () =>{
//     return(
//         <div>


//         </div>
//     )
// }

// export default Categories