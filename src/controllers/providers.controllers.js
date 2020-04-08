const provider = {};
const Provider = require('../models/Provide.model');
const cloudinary = require('../config/cloudinary.config');

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

provider.deleteProvider = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProvider = await Provider.findByIdAndDelete(id);
    res.json({ status: 'ok', deletedProvider });
    // BUG: si el id no existe todo se realizara correctamente pero deletedProvider valdra null
  } catch (e) {
    res.status(500).json(e);
  }
};

provider.updateProvider = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dni, photo } = req.body;
  try {
    const updatedProvider = await Provider.findByIdAndUpdate(id, {
      firstName,
      lastName,
      dni,
      photo,
    });
    res.json(updatedProvider);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = provider;
