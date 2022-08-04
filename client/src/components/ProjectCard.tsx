import { Link } from 'react-router-dom'
import { IProject } from '../App'

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="col-md-6">
      <div className="card bg-light mb-2" style={{ height: '95%' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-3">{project.name}</h5>
            <Link
              to={`/projects/${project.id}`}
              className="btn btn-sm btn-light"
            >
              View
            </Link>
          </div>
          <p className="small">
            Client: <strong>{project.client.name}</strong>
          </p>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
