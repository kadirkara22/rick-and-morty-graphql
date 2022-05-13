import { gql } from '@apollo/client'

export const RICKANDMORTY_QUERY = gql`
query {
  characters {
    results {
      name
      species
      gender
      location{name}
    }
  }
}
`