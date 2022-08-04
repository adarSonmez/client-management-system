import { IClient } from '../App'

export default function ClientInfo({ client }: { client: IClient }) {
  return (
    <>
      <h5 className="my-3">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <i className="bi bi-person" /> {client.name}
        </li>
        <li className="list-group-item">
          <i className="bi bi-envelope" /> {client.email}
        </li>
        <li className="list-group-item">
          <i className="bi bi-phone" /> {client.phone}
        </li>
      </ul>
    </>
  )
}
