import React, { useState } from "react";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']
const sortList = ['name', 'rating', 'price']

const Categories = ({ categoryId, setCategoryId }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

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
                        <button className="dropbtn">{sortList[currentIndex]}</button>
                        <div className="dropdown-content">
                            {
                                sortList.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        onClick={() => setCurrentIndex(idx)}
                                    >{item}</a>
                                ))
                            }
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