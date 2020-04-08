const fs = require('fs-extra');
const providerCtrl = {};
const Provider = require('../models/Provide.model');
const cloudinary = require('../config/cloudinary.config');

providerCtrl.getProviders = async (req, res) => {
  const allProviders = await Provider.find();
  res.json(allProviders);
};

providerCtrl.addProvider = async (req, res) => {
  const { firstName, lastName, dni } = req.body;

  try {
    const uploadResult = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: 'ProvidersPeruSoftPractice',
    });
    const newProvider = new Provider({
      firstName,
      lastName,
      dni,
      photo: {
        imageURL: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      },
    });
    await newProvider.save();
    await fs.unlink(req.file.path);
    res.json({ status: 'added successfully' });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

providerCtrl.deleteProvider = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProvider = await Provider.findByIdAndDelete(id);
    res.json({ status: 'ok', deletedProvider });
    // BUG: si el id no existe todo se realizara correctamente pero deletedProvider valdra null
  } catch (e) {
    res.status(500).json(e);
  }
};

providerCtrl.updateProvider = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dni, photo } = req.body;
  console.log(req.body);
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

module.exports = providerCtrl;
