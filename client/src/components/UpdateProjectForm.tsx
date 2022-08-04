import { FormEvent, useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECT, GET_PROJECTS } from '../queries/projectQueries'
import { DELETE_PROJECT, UPDATE_PROJECT } from '../mutations/projectMutations'
import { useNavigate } from 'react-router-dom'

import { IProject } from '../App'

function UpdateProjectForm({ project }: { project: IProject }) {
  const navigate = useNavigate()
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)

  const [status, setStatus] = useState('Not Started')

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!name || !description || !status) {
      return alert('Please fill out all fields')
    }

    updateProject({ name, description, status } as any)
  }

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  })

  return (
    <div className="mt-5">
      <h5 className="mb-3">Update Project Details</h5>
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

        <div className="d-flex">
          <button type="submit" className="btn btn-tertiary">
            Update Project
          </button>
          <button className="btn btn-danger" onClick={() => deleteProject()}>
            Delete Project
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProjectForm
