import React from "react";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']

const Categories = ({categoryId, setCategoryId}) => {
    
    return (
        <div>
            <div className="bottom-banner">
                <div className="container">
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