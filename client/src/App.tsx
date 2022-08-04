import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { client } from './config/apolloConfig'
import Header from './components/Header'
import Home from './pages/Home'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

// import bundled bootstrap js
import 'bootstrap/dist/js/bootstrap'

export interface IClient {
  id: string
  name: string
  email: string
  phone: string
}

export interface IProject {
  id: string
  name: string
  description: string
  client: IClient
  status: 'Not Started' | 'In Progress' | 'Completed'
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
