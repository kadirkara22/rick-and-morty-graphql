import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import styles from './styles.module.css'


import Loading from '../Loading';
import { RICKANDMORTY_QUERY } from './queries';
import Page from './Page';
import Footer from './Footer';
const Content = ({ search, selectedGender, selectedSpecies, selectedLocations }) => {
    const [perPage, setPerPage] = useState(8)
    const { loading, data } = useQuery(RICKANDMORTY_QUERY)
    const [pageNumber, SetPageNumber] = useState(0)



    if (loading) {
        return <Loading />
    }
    const filteredData = data.characters.results && data.characters.results.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.species.toLowerCase().includes(search.toLowerCase()) ||
        item.location.name.toLowerCase().includes(search.toLowerCase())
    )

    const filterGenderChacters = filteredData.filter(item => selectedGender?.includes(item.gender))
    const filterSpeciesChacters = filteredData.filter(item => selectedSpecies?.includes(item.species))
    const filterLocations = filteredData.filter(item => selectedLocations.includes(item.location.name))


    const pagesVisited = pageNumber * perPage
    const displayCharacters = filterGenderChacters.length !== 0 || filterSpeciesChacters.length !== 0 ?
        (filterGenderChacters.slice(pagesVisited, Number(pagesVisited) + Number(perPage))
            && filterSpeciesChacters.slice(pagesVisited, Number(pagesVisited) + Number(perPage))) : filteredData.slice(pagesVisited, Number(pagesVisited) + Number(perPage))
    const displayCharacters2 = filterGenderChacters.length !== 0 ?
        filterGenderChacters.slice(0, Number(perPage)) : filteredData.slice(0, Number(perPage))



    return (
        <>
            <Page setPerPage={setPerPage} />
            <div className={styles.contentCards}>
                <div className={styles.characterCards}>

                    {
                        displayCharacters.length !== 0 ? displayCharacters.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <img src={item.image} alt="" className={styles.image} />
                                <div className={styles.species}>{item.species}</div>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.location}>{item.location.name}</div>
                            </div>
                        )) :
                            displayCharacters2.map((item) => (
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
            <Footer data={data} perPage={perPage} SetPageNumber={SetPageNumber} displayCharacters={displayCharacters} />
        </>
    )
}

export default Content
