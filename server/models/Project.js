const { Schema, model } = require('mongoose')

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }, 
  status: {
    type: String,
    required: true,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  }
})

module.exports = model('Project', ProjectSchema)
