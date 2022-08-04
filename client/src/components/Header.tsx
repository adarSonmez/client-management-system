import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className="navbar bg-light border-bottom mb-4 p-0 position-relative">
      <div className="container">
        <Link className="navbar-brand " to={'/'} style={{ cursor: 'pointer' }}>
          <div className="position-absolute translate-middle mx-4">
            <img src={logo} alt="logo" className="mr-2" />
          </div>
        </Link>
        <h1 className="display-6 fs-4 my-4 m-auto">
          Client Management System
        </h1>
      </div>
    </nav>
  )
}

export default Header
