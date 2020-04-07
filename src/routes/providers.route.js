const router = require('express').Router();
const {
  getProviders,
  addProvider,
} = require('../controllers/providers.controllers');

router.get('/', getProviders);
router.post('/', addProvider);

module.exports = router;
