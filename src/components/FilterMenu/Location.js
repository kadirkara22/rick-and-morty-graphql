import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import Loading from '../Loading'
import { LOCATION_QUERY } from './queries'
import styles from './styles.module.css'
const Location = ({ selectedLocations, setSelectedLocations, checked }) => {
    const [search, setSearch] = useState("")


    const { loading, data } = useQuery(LOCATION_QUERY)
    if (loading) {
        return <Loading />
    }

    const locationItem = []
    data.locations.results.forEach(item => { locationItem[item.name] = (locationItem[item.name] || 0) + 1 });

    var countsSortLocations = [];
    for (var i in locationItem) {
        countsSortLocations.push([locationItem[i], i])
    }
    countsSortLocations.sort(function (a, b) {

        return b[0] - a[0];

    });

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const filteredLocation = countsSortLocations.filter(item => item[1].toLowerCase().includes(search.toLowerCase()))

    const handleClick = (e) => {
        setSelectedLocations(() => selectedLocations.length !== 0 ? (selectedLocations.find(item => item === e.target.value)
            ? selectedLocations.map(item => item === e.target.value ? selectedLocations.find(item => item !== e.target.value) : item)
            : [...selectedLocations, e.target.value]) : [...selectedLocations, e.target.value])

    }

    return (
        <div className={styles.locationItem}>
            <div className={styles.title}>Location</div>
            <div>
                <div className={styles.locationContainer}>
                    <input onChange={handleChange} checked={checked} value={search} className={styles.locationInput} placeholder="Search for locationsâ€¦"></input>
                    <button className={styles.locationButton}>
                        <svg className="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg"
                            width="10" height="10" viewBox="0 0 40 40">
                            <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                        </svg>
                    </button>
                </div>

                <div>
                    <ul>

                        {
                            filteredLocation.length !== 0 ? filteredLocation.map((item, i) => (
                                <li key={i}>
                                    <label>
                                        <input onClick={handleClick} value={item[1]} type="checkbox"></input>
                                        <span>{item[1]}</span>
                                        <span className={styles.count}>{item[0]}</span>
                                    </label>

                                </li>
                            )) :
                                <div>No results</div>
                        }


                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Location
