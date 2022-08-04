import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow'
import Spinner from './Spinner'
import { GET_CLIENTS } from '../queries/clientQueries'
import AddClientModal from './AddClientModal'
import { IClient } from '../App'

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  const clients: IClient[] = data.clients

  return (
    <>
      <table className="table table-hover table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
          <AddClientModal />
        </tbody>
      </table>
    </>
  )
}

export default Clients
