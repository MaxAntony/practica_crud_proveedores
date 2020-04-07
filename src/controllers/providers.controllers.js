const provider = {};
const Provider = require('../models/Provide.model');

provider.getProviders = async (req, res) => {
  const allProviders = await Provider.find();
  res.json({ respuesta: 'hola', providers: allProviders });
};

module.exports = provider;
