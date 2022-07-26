const ClientType = require('./clientType')
const Client = require('../../models/Client')

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
        return Client.findById(parentValue.clientId)
      },
    },
  }),
})

module.exports = ProjectType
