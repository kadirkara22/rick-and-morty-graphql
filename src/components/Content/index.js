import React from 'react'
import { useQuery } from '@apollo/client'
import styles from './styles.module.css'


import Loading from '../Loading';
import { RICKANDMORTY_QUERY } from './queries';
const Content = () => {
    const { loading, data } = useQuery(RICKANDMORTY_QUERY)
    if (loading) {
        return <Loading />
    }
    console.log(data.characters.results)
    return (
        <div className={styles.contentCards}>
            <div className={styles.characterCards}>

                {
                    data.characters.results && data.characters.results.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img src={item.image} alt="" className={styles.image} />
                            <div className={styles.species}>{item.species}</div>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.location}>{item.location.name}</div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Content
