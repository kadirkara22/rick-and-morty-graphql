import React from 'react'
import styles from './styles.module.css'
const Search = ({ setSearch, search }) => {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={styles.header}>
            <p className={styles.title}>Wubba Lubba Dub Dub.</p>
            <div className={styles.search}>
                <div className={styles.form}>
                    <input onChange={handleChange} value={search} className={styles.searchInput} placeholder="Name, description, location ..." />
                    <button type="submit" className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18">
                            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="1.67" transform="translate(1 1)">
                                <circle cx="7.11" cy="7.11" r="7.11"></circle><path d="M16 16l-3.87-3.87"></path>
                            </g>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Search
