const provider = {};
const Provider = require('../models/Provide.model');

provider.getProviders = async (req, res) => {
  const allProviders = await Provider.find();
  res.json(allProviders);
};

provider.addProvider = async (req, res) => {
  const { firstName, lastName, dni, photo } = req.body;

  try {
    const newProvider = new Provider({ firstName, lastName, dni, photo });
    await newProvider.save();
    res.json({ status: 'added successfully' });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
  console.log(req.body);
};

module.exports = provider;
