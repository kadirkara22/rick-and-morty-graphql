import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css'
const Footer = ({ data }) => {

    const pageCount = Math.ceil(data.characters.results.length / 4)

    return (
        <div className={styles.footer}>
            <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                pageCount={pageCount}
                containerClassName={styles.paginate}
                activeClassName={styles.paginationActive}
            >
            </ReactPaginate>
        </div>
    )
}

export default Footer
