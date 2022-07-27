const { Schema, model } = require('mongoose')

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
  },
})

module.exports = model('Client', ClientSchema)
