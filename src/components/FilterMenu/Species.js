import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../Loading'
import { SPECIES_QUERY } from './queries'
import styles from './styles.module.css'
const Species = () => {
    const { loading, data } = useQuery(SPECIES_QUERY)
    if (loading) {
        return <Loading />
    }
    const speciesItem = []
    data.characters.results.forEach(item => { speciesItem[item.species] = (speciesItem[item.species] || 0) + 1 });

    var countsSortSpecies = [];
    for (var i in speciesItem) {
        countsSortSpecies.push([speciesItem[i], i])
    }
    countsSortSpecies.sort(function (a, b) {

        return b[0] - a[0];

    });

    return (
        <div className={styles.speciesItem}>
            <div className={styles.title}>Species</div>
            <div>
                <div>
                    <ul>

                        {
                            countsSortSpecies && countsSortSpecies.map((item, i) => (
                                <li key={i}>
                                    <label>
                                        <input type="checkbox"></input>
                                        <span>{item[1]}</span>
                                        <span className={styles.count}>{item[0]}</span>
                                    </label>

                                </li>
                            ))
                        }


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Species
