const router = require('express').Router();
const {
  getProviders,
  getProvider,
  addProvider,
  deleteProvider,
  updateProvider,
} = require('../controllers/providers.controllers');

router.get('/', getProviders);
router.get('/:id', getProvider);
router.post('/', addProvider);
router.delete('/:id', deleteProvider);
router.put('/:id', updateProvider);

module.exports = router;
