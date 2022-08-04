import { gql } from '@apollo/client'

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

export const GET_CLIENT = gql`
  query getClient($id: ID!) {
    client(id: $id) {
      id
      name
      email
      phone
    }
  }
`
