import { gql } from '@apollo/client'

export const RICKANDMORTY_QUERY = gql`
query {
  characters {
    results {
      id
      name
      species
      gender
      image
      location{name}
    }
  }
}
`