const Pagination = () => {
    return (
        <div className="pagination">
            <button>&lsaquo;</button>
            {
                [...Array(3)].map((_, idx) => (
                    <div
                        key={idx}
                        className={idx === 0 ? 'active' : ''}
                    >
                        {idx + 1}
                    </div>
                ))
            }
            <button>&rsaquo;</button>
        </div>
    )
}

export default Pagination