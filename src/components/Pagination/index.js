import React from 'react';
import './style.css';

const PaginationItens = (
    {
        nextPage,
        previousPage,
        currentPage,
        previoustUrl,
        nextUrl }) => {
    return (
        <div className='pagination'>
            <button onClick={previousPage} disabled={!previoustUrl}>Anterior</button>
            <label className='pagination-current-page'>{currentPage}</label>
            <button onClick={nextPage} disabled={!nextUrl}>Próximo</button>
        </div>
    )
}
export default PaginationItens;