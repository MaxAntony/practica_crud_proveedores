const { Schema, model } = require('mongoose');

const ProviderSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true },
    photo: {
      imageURL: { type: String, required: true },
      public_id: { type: String, require: true },
    },
  },
  { timestamps: true },
);

module.exports = model('Provider', ProviderSchema);
