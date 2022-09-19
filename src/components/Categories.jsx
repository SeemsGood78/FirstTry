import React, { useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { setCategoryId } from "../redux/slices/sortSlice";

const categories = ['All', 'Wheat', 'IPA', 'Lager', 'Ale', 'Stout']
const sortList = ['name', 'rating', 'price']

const Categories = ({sortId, setSortId }) => {
    const dispatch = useDispatch()
    const categoryId = useSelector(state => state.sort.categoryId)

    return (
        <div>
            <div className="bottom-banner">
                <div className="flexb">
                    <ul>
                        {categories.map((category, idx) => (
                            <li
                                key={idx}
                                className={idx === categoryId ? 'active' : ''}
                                onClick={() => dispatch(setCategoryId(idx))}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                    <div className="dropdown">
                        <span>Search by</span>
                        <button className="dropbtn">{sortList[sortId]}</button>
                        <div className="dropdown-content">
                            {
                                sortList.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        onClick={() => setSortId(idx)}
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