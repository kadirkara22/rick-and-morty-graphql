import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css'
const Footer = ({ data, perPage, SetPageNumber }) => {


    const pageCount = Math.ceil(data.characters.results.length / perPage)

    const changePage = ({ selected }) => {

        SetPageNumber(selected)

    }


    return (
        <div className={styles.footer}>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                pageCount={pageCount}
                containerClassName={styles.paginate}
                activeClassName={styles.paginationActive}
                onPageChange={changePage}

            >
            </ReactPaginate>
        </div>
    )
}

export default Footer
