import React, { useState } from 'react'
import styles from './styles.module.css'
const Page = ({ setPerPage }) => {

    const handleClick = (e) => {
        setPerPage(e.target.value)
    }
    return (
        <div className={styles.page}>
            <div>
                <select onChange={handleClick}>
                    <option value="8">8 hits per page</option>
                    <option value="16">16 hits per page</option>
                    <option value="20">20 hits per page</option>
                </select>
            </div>
        </div>
    )
}

export default Page
