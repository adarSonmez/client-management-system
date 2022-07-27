const { Schema, model } = require('mongoose')

// Create a new schema for the Client model
const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
})

module.exports = model('Client', ClientSchema)
