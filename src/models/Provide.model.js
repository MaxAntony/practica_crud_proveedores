const { Schema, model } = require('mongoose');

const ProviderSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: { type: String, required: true },
  photo: { type: String, required: true },
});

module.exports = model('Provider', ProviderSchema);
