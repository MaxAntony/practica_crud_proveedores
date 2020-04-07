const router = require('express').Router();
const {
  getProviders,
  addProvider,
  deleteProvider,
} = require('../controllers/providers.controllers');

router.get('/', getProviders);
router.post('/', addProvider);
router.delete('/:id', deleteProvider);

module.exports = router;
