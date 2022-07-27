const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')

// Custom GraphQLObjectTypes
const ClientType = require('./types/clientType')
const ProjectType = require('./types/projectType')

// Mongoose Models
const Client = require('../models/Client')
const Project = require('../models/Project')

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    client: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return Client.findById(args.id)
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parentValue, args) {
        return Client.find({})
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return Project.findById(args.id)
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return Project.find({})
      },
    },
  },
})

module.exports = RootQuery
