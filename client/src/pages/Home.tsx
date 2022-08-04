import Clients from '../components/Clients'
import Projects from '../components/Projects'

function Home() {
  return (
    <section className="home-page col-md-10 m-auto">
      <h5 className="text-center">Projects</h5>
      <Projects />
      <hr />
      <h5 className="text-center">Clients</h5>
      <Clients />
    </section>
  )
}

export default Home
