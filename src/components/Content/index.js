import React from 'react'
import { useQuery } from '@apollo/client'


import Loading from '../Loading';
import { RICKANDMORTY_QUERY } from './queries';
const Content = () => {
    const { loading, data } = useQuery(RICKANDMORTY_QUERY)
    if (loading) {
        return <Loading />
    }
    console.log(data)
    return (
        <div>
            Content
        </div>
    )
}

export default Content
