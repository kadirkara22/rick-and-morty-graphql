import { gql } from '@apollo/client'

export const GENDER_QUERY = gql`
query  {
  characters {
    results {
        id
      gender
    }
  }
}
`
export const SPECIES_QUERY = gql`
query {
  characters {
    results {
      id
      species
    }
  }
}
`
export const LOCATION_QUERY = gql`
query {
  locations {
    results {
      id
      name
    }
  }
}
`