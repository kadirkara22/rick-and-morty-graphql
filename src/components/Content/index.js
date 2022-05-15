import React from 'react'
import { useQuery } from '@apollo/client'
import styles from './styles.module.css'


import Loading from '../Loading';
import { RICKANDMORTY_QUERY } from './queries';
import Page from './Page';
import Footer from './Footer';
const Content = ({ search }) => {
    const { loading, data } = useQuery(RICKANDMORTY_QUERY)
    if (loading) {
        return <Loading />
    }
    const filteredData = data.characters.results && data.characters.results.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.species.toLowerCase().includes(search.toLowerCase()) ||
        item.location.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <Page />
            <div className={styles.contentCards}>
                <div className={styles.characterCards}>

                    {
                        filteredData && filteredData.map((item) => (
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
            <Footer data={data} />
        </>
    )
}

export default Content
