import React from 'react'
import styles from './styles.module.css'
const Page = () => {
    return (
        <div className={styles.page}>
            <div>
                <select>
                    <option>16 hits per page</option>
                    <option>32 hits per page</option>
                    <option>64 hits per page</option>
                </select>
            </div>
        </div>
    )
}

export default Page
