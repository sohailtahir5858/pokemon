import React from 'react'

function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div className='col-1 m-auto'>
            <button className='btn btn-success btn-sm' onClick={goToPrevPage}>Prev</button>
            <button className='btn btn-success btn-sm ml-3' onClick={goToNextPage}>Next</button>
        </div>
    )
}

export default Pagination