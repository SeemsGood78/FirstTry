import { useDispatch, useSelector } from "react-redux"
import { minusCurrentPage, plusCurrentPage, setCurrentPage } from "../redux/slices/sortSlice"

const Pagination = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.sort.currentPage)
    console.log(currentPage)                                                                            
    return (
        <div className="pagination">
            <button disabled={ currentPage === 1} onClick={() => dispatch(minusCurrentPage())}>&lsaquo;</button>
            {
                [...Array(3)].map((_, idx) => (
                     <div
                        onClick={ () => dispatch(setCurrentPage(idx+1))}
                        key={idx}
                        className={idx+1 === currentPage ? 'active' : ''}
                    >
                        {idx + 1}
                    </div>
                ))
            }
            <button disabled={ currentPage === 3} onClick={() => dispatch(plusCurrentPage())}>&rsaquo;</button>
        </div>
    )
}

export default Pagination