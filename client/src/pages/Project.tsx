import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Spinner from '../components/Spinner'
import ClientInfo from '../components/ClientInfo'
import UpdateProjectForm from '../components/UpdateProjectForm'
import { GET_PROJECT } from '../queries/projectQueries'
import { IProject } from '../App'

function Project() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } })

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  const { project }: { project: IProject } = data

  return (
    <section className="project-page row container mb-5 mt-4">
      <div className="mx-auto col-md-8 card px-5 py-4">
        <Link to="/" className="btn border btn-light btn-sm d-inline ms-auto">
          Back
        </Link>

        <h2 className="text-center mb-2">{project.name}</h2>
        <p className="lead">{project.description}</p>

        <h5 className="mt-4">Project Status: </h5>
        <p className="lead">{project.status}</p>

        <ClientInfo client={project.client} />

        <UpdateProjectForm project={project} />
      </div>
    </section>
  )
}

export default Project
