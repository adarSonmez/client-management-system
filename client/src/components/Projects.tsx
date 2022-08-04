import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import ProjectCard from './ProjectCard'
import { GET_PROJECTS } from '../queries/projectQueries'
import AddProjectModal from './AddProjectModal'
import { IProject } from '../App'

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  const projects: IProject[] = data.projects
  return (
    <>
      <div className="row mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <AddProjectModal />
      </div>
    </>
  )
}

export default Projects
