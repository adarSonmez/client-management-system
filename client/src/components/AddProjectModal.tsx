import { FormEvent, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECTS } from '../queries/projectQueries'
import { GET_CLIENTS } from '../queries/clientQueries'
import Spinner from './Spinner'
import { IClient } from '../App'

function AddClientModal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [clientId, setClientId] = useState('')
  const [status, setStatus] = useState('NOT_STARTED')

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS })!
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      })
    },
  })

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields')
    }

    addProject({ name, description, clientId, status } as any)

    setName('')
    setDescription('')
    setStatus('NOT_STARTED')
    setClientId('')
  }

  if (loading) return <Spinner />
  if (error) return <p className="text-danger">Something Went Wrong</p>

  const clients: IClient[] = data.clients

  return (
    <>
      <div className="col-md-6">
        <div
          className="card bg-light mb-3 btn bg-danger"
          style={{ height: '95%' }}
        >
          <div
            className="card-body align-items-center justify-content-center mt-2 text-success"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModal"
          >
            <div>
              <i className="bi bi-plus-circle fs-2"></i>
              <div className="fs-6">New Project</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addProjectModal"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProjectModalLabel">
                New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="NOT_STARTED">Not Started</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Client</label>
                  <select
                    id="clientId"
                    className="form-select"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  >
                    <option value="">Select Client</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-outline-success"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClientModal
