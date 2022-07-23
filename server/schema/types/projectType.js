const { clients } = require('../../sampleData')
const ClientType = require('./clientType')

const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parentValue, args) {
        return clients.find((client) => client.id === parentValue.clientId)
      },
    },
  }),
})

module.exports = ProjectType
