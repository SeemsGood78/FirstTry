import { useDispatch, useSelector } from "react-redux"
import { itemsPerPage, minusCurrentPage, plusCurrentPage, setCurrentPage } from "../redux/slices/sortSlice"

const Pagination = () => {
    const dispatch = useDispatch()
    const { currentPage, items } = useSelector(state => state.sort)
    const pageCount = Math.trunc(items.length / itemsPerPage + 1)

    return (
        <div className="pagination">
            <button
                className={pageCount === 1 ? 'display-none' : ''}
                disabled={currentPage === 1}
                onClick={() => dispatch(minusCurrentPage())}
            >
                &lsaquo;
            </button>
            {pageCount === 1 ? <></> :
                [...Array(pageCount)].map((_, idx) => (
                    <div
                        onClick={() => dispatch(setCurrentPage(idx + 1))}
                        key={idx}
                        className={idx + 1 === currentPage ? 'active' : ''}
                    >
                        {idx + 1}
                    </div>
                ))
            }
            <button
                className={pageCount === 1 ? 'display-none' : ''}
                disabled={currentPage === 3}
                onClick={() => dispatch(plusCurrentPage())}
            >
                &rsaquo;
            </button>
        </div>
    )
}

export default Pagination