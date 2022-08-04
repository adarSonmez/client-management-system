import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="error-page d-flex flex-column justify-content-center align-items-center mt-5">
      <i className="bi bi-exclamation-triangle text-danger fs-1"></i>
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link to="/" className="btn btn-light border">
        Go Back
      </Link>
    </section>
  )
}

export default NotFound
