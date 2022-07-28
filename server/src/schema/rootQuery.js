const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')

// Custom GraphQLObjectTypes
const ClientType = require('./types/clientType')
const ProjectType = require('./types/projectType')

// Mongoose Models
const Client = require('../models/Client')
const Project = require('../models/Project')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Get a single client
    client: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return Client.findById(args.id)
      },
    },
    // Get all clients
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parentValue, args) {
        return Client.find({})
      },
    },
    // Get a single project
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return Project.findById(args.id)
      },
    },
    // Get all projects
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return Project.find({})
      },
    },
  },
})

module.exports = RootQuery
