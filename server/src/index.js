const express = require('express')
const colors = require('colors')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config()

const connectDB = require('./config/db')
const schema = require('./schema/schema')

// Connect to MongoDB
connectDB()

const app = express()
const port = process.env.PORT || 5000

// Cross-Origin Resource Sharing
app.use(cors())

// GraphQL Endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
