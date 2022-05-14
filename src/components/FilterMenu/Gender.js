import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../Loading'
import { GENDER_QUERY } from './queries'
import styles from './styles.module.css'
const Gender = () => {
    const { loading, data } = useQuery(GENDER_QUERY)
    if (loading) {
        return <Loading />
    }

    const genderItem = []
    data.characters.results.forEach(item => { genderItem[item.gender] = (genderItem[item.gender] || 0) + 1 });

    var countsSortGender = [];
    for (var i in genderItem) {
        countsSortGender.push([genderItem[i], i])
    }
    countsSortGender.sort(function (a, b) {

        return b[0] - a[0];

    });


    return (
        <div className={styles.genderItem}>
            <div className={styles.title}>Gender</div>
            <div>
                <div>
                    <ul>

                        {
                            countsSortGender && countsSortGender.map((item, i) => (
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

export default Gender
