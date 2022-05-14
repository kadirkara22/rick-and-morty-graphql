import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../Loading'
import { SPECIES_QUERY } from './queries'

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
        <div>
            <div>Species</div>
            <div>
                <div>
                    <ul>

                        {
                            countsSortSpecies && countsSortSpecies.map((item, i) => (
                                <li key={i}>
                                    <label>
                                        <input type="checkbox"></input>
                                        <span>{item[1]}</span>
                                        <span>{item[0]}</span>
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
