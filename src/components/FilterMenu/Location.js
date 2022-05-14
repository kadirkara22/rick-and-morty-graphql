import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../Loading'
import { LOCATION_QUERY } from './queries'

const Location = () => {
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

    return (
        <div>
            <div>Location</div>
            <div>
                <div>
                    <ul>

                        {
                            countsSortLocations && countsSortLocations.map((item, i) => (
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

export default Location
