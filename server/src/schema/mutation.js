const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLEnumType,
} = require('graphql')

// Custom GraphQLObjectTypes
const ClientType = require('./types/clientType')
const ProjectType = require('./types/projectType')

// Mongoose Models
const Client = require('../models/Client')
const Project = require('../models/Project')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Create a new client
    addClient: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        }).save()
      },
    },
    // Delete a client
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, args) {
        return Client.findByIdAndRemove(args.id)
      },
    },
    // Update a client
    updateClient: {
      type: ClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              phone: args.phone,
            },
          },
          { new: true }
        )
      },
    },
    // Create a new project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              NOT_STARTED: { value: 'Not Started' },
              IN_PROGRESS: { value: 'In Progress' },
              COMPLETED: { value: 'Completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
        clientId: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        }).save()
      },
    },
    // Delete a project
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, args) {
        return Project.findByIdAndRemove(args.id)
      },
    },
    // Update a project
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatusUpdate',
            values: {
              NOT_STARTED: { value: 'Not Started' },
              IN_PROGRESS: { value: 'In Progress' },
              COMPLETED: { value: 'Completed' },
            },
          }),
        },
        clientId: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
              clientId: args.clientId,
            },
          },
          { new: true }
        )
      },
    },
  },
})

module.exports = Mutation
