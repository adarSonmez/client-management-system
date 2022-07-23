const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')

const { projects, clients } = require('../sampleData')
const ClientType = require('./types/clientType')
const ProjectType = require('./types/projectType')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    client: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return clients.find((client) => client.id === args.id)
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parentValue, args) {
        return clients
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return projects.find((project) => project.id === args.id)
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return projects
      },
    },
  },
})

module.exports = RootQuery
